import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './cart.interfaces';
import { Product } from '../products/products.interfaces';

const initialState: CartState = {
    cart: [],
    isLoading: false,
    isError: false
}

const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>){
            state.cart.push(action.payload);
            state.isError = false;
            state.isLoading = false;
        },
        clearCart(state){
            state.cart = [];
            state.isError = false;
            state.isLoading = false;
        }
    }
})

export const {addToCart, clearCart} = cart.actions;
export default cart;