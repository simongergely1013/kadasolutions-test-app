import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductsState } from './products.interfaces';
import axios from 'axios';

const initialState: ProductsState = {
    products: [],
    isLoading: false,
    isError: false,
    hasMore: true
};

export const fetchProductsData = createAsyncThunk(
    'products/getProductsData',
    async (limit: number) => {
        const {data} = await axios(`https://dummyjson.com/products?limit=${limit}`);
        return data.products;
    }
)

const products = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.hasMore = true;
        });
        builder.addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<Array<Product>>) => {
            state.isLoading = false;
            state.isError = false;
            state.products = action.payload;
            state.hasMore = true;
        });
        builder.addCase(fetchProductsData.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            state.hasMore = false;
        })
    }
})

export default products;