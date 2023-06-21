import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './features/cart/cartSlice';
import userSlice from "./features/cart/userSlice";
import courseSlice from "./features/courseSlice";

export const store = configureStore ({
    reducer: 
     {
         cart : cartReducer,
         user:  userSlice,
         allCourses:courseSlice
    }
});