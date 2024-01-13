import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SingleProductState } from './singleProduct.interfaces';
import { Product } from '../products/products.interfaces';
import axios from 'axios';

const initialState: SingleProductState = {
    product: {
    id: null,
    title: '',
    description: '',
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
    },
    isLoading: false,
    isError: false
}

export const fetchSingleProductData = createAsyncThunk(
    'singleProduct/fetchSingleProductData',
    async (id: number) => {
        const {data} = await axios(`https://dummyjson.com/products/${id}`);
        return data;
    }
);

const singleProduct = createSlice({
    name: 'singleProduct',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchSingleProductData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
    });
    builder.addCase(fetchSingleProductData.fulfilled, (state, action: PayloadAction<Product>) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload;
    });
    builder.addCase(fetchSingleProductData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
    });
    }
})

export default singleProduct;