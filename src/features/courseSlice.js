import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APiUrl } from "../utils/axios";

const initialState = {
    isLoading: false,
    courses: [],
    errors: '',
    name: '',
    course_category: '',
    image: '',
    price: '',
    message:''
}
export const getAllcourses = createAsyncThunk('/products/index', async (_, thunkApi) => {
    console.log('>>>')
    try {
        const resp = await APiUrl.get('/product/index');
        //console.log('resp',resp);
        return resp.data;
    }
    catch (error) {
        console.log(error.response);
        return thunkApi.rejectWithValue(error.response.data)
    }
})

export const createCourse = createAsyncThunk('course/store', async (course, thunkApi) => {

    console.log('course', course)
    try {
        const data = new FormData();
        data.append('name', course.values.name);
        data.append('course_category', course.values.course_category);
        data.append('image', course.values.image);
        data.append('price', course.values.price);

        const resp = await APiUrl.post('course/store', data,{ headers:{
                'Content-Type': 'multipart/form-data',
              },
        });
        return resp.data;
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }

})

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        handleChange: (state, { payload }) => {
            console.log('payload', payload);
            //state[payload.name] = payload.value;
        }
    },
    extraReducers: {
        [getAllcourses.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllcourses.fulfilled]: (state, { payload }) => {
            console.log('>>payload', payload)
            const { courses } = payload;
            //const  message  = payload;
            state.courses = payload;
            state.isLoading = false;
            //alert(JSON.stringify(payload.data.message));
        },
        [getAllcourses.rejected]: (state, { payload }) => {
            state.isLoading = false;
            alert(JSON.stringify(payload.data.message));
        },

        [createCourse.pending]:(state)=>{
            state.isLoading = true;
        },

        [createCourse.fulfilled]:(state,{payload})=>{
        
            console.log('payload',payload);

            state.isLoading = false;
            state.message = payload.message;
        },
        [createCourse.rejected]:(state,{payload})=>{
            
            state.isLoading = false;
            state.errors = payload.data.errors
        },
    }
});



export const { handleChange } = courseSlice.actions;
export default courseSlice.reducer;