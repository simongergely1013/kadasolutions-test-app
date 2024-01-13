import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductsState } from './products.interfaces';
import axios from 'axios';

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    isError: false
};

export const fetchProductsData = createAsyncThunk(
    'products/getProductsData',
    async () => {
        const {data} = await axios('https://dummyjson.com/products');
        return data.products;
    }
)

const products = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
            state.isLoading = false;
            state.isError = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProductsData.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
        })
    }
})

export default products;