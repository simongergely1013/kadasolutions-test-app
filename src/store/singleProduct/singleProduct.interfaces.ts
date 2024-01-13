import { Product } from "../products/products.interfaces";

export interface SingleProductState {
    product: Product;
    isLoading: boolean;
    isError: boolean;
}