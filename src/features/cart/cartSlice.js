import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cart.json'


const initialState = {
    cartItems: cartItems,
    amount: 3,
    total: 0,
    isAdding: false,
    
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        clearCart: (state) => {
            console.log('>>>>')
            state.cartItems = [];
        },
        reomveItem: (state, action) => {
            console.log(action)
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increaseItem: (state, { payload }) => {
            // const itemId = action.payload;
            console.log(typeof payload.id)
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            console.log(cartItem)
            cartItem.qty = cartItem.qty + 1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.qty;
            })
            state.amount = amount;
            state.total = total;
        },

        addItem:(state,{payload})=>{
            state.isAdding = true;
            const newItem = payload;
            console.log('newItem',newItem)
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                // If the item already exists in the cart, update its quantity
                existingItem.quantity += newItem.quantity;
                state.isAdding = false;
              } else {
                // Otherwise, add the item to the cart
                state.cartItems.push(newItem);
                state.isAdding = false;
              }
        }
    },
    extraReducers:{


    }
});

export const { clearCart, reomveItem, increaseItem,addItem } = cartSlice.actions;
export default cartSlice.reducer;