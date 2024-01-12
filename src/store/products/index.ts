import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}
interface ProductsState {
    products: Array<Products>;
    isLoading: boolean;
    isError: boolean;
}

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
        builder.addCase(fetchProductsData.fulfilled, (state, action: PayloadAction<Array<Products>>) => {
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