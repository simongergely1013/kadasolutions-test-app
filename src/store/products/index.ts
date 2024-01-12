import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    products: []
};

const products = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setProducts(state, action: PayloadAction<any>) {
            state.products = action.payload
        },
    }
})

export const {setProducts} = products.actions;
export default products;