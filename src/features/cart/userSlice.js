import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APiUrl } from "../../utils/axios";
import { adduserTolocalsotrage, getuserFromlocalsotrage } from "../../utils/localstorage";

const initialState = {
    isLoading: false,
    user: getuserFromlocalsotrage(),
    errors: {},
    message: ''
}

export const registerUser = createAsyncThunk('user/Register',
    async (user, thunkApi) => {
        try {
            const resp = await APiUrl.post('/user/register', user);
            console.log(resp);
            return resp.data;
        }
        catch (error) {
            console.log(error.response);
            return thunkApi.rejectWithValue(error.response.data)
        }
    });

export const loginUser = createAsyncThunk('user/Login',
    async (user, thunkApi) => {
        try {
            const resp = await APiUrl.post('/user/login', user);
            console.log(resp);
            return resp.data;
        }
        catch (error) {
            console.log(error.response);
            return thunkApi.rejectWithValue(error.response.data)
        }
    });


const userSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const user = payload;
            //const  message  = payload;
            console.log('payload', user)
            adduserTolocalsotrage(user);
            state.user = user;
            state.isLoading = false;
            alert(JSON.stringify(payload.data.message));
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            console.log('payload', payload);
            state.errors = payload.errors;
            //alert(payload);
        },

        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const user = payload;
            console.log('payload', user)
            adduserTolocalsotrage(user);
            state.user = user;
            state.isLoading = false;
            alert(JSON.stringify(payload.data.message));
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            console.log('payload', payload);

            //const errorData = await response.json();
            //const errorMessageArray = payload.errors; // Assuming 'error' is the key for the array in the error response

            //console.log('errorMessageArray',errorMessageArray)
            //const errorMessage = errorMessageArray.join(', ');

            state.errors = payload.errors;
            //alert(errorMessage);
        }
    }
});

export default userSlice.reducer;
