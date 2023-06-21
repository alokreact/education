import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APiUrl } from "../utils/axios";
import { adduserTolocalsotrage } from "../utils/localstorage";
 
const initialState = {
    isLoading:false,
    user:[],
    errors:{}
};

export const updateProfile = createAsyncThunk('user/update', 
async(user,thunkApi)=>{
    try{
        const resp = await APiUrl.post ('/user/update',user);
        console.log(resp);
        return resp.data;
    }
    catch(error){
        console.log(error.response);
        return thunkApi.rejectWithValue(error.response.data)
    }
}
) 

const Profile = createSlice({

    'name':'profile',
    initialState,

    extraReducer:{
    [updateProfile.pending]:(state)=>{
        state.isLoading = true;
    },
    [updateProfile.fulfilled]:(state,{payload})=>{
        const user = payload;
        state.isLoading = false;
        adduserTolocalsotrage(user);
        state.user = user;
    },
    [updateProfile.rejected]:(state,{payload})=>{
        state.isLoading = false;
        console.log('payload',payload);
        state.errors = payload.errors;
    }   

    }
})