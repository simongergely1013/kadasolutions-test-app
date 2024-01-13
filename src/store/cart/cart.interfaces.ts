import { Product } from "../products/products.interfaces";

export interface CartState {
    cart: Array<Product>;
    isLoading: boolean;
    isError: boolean;
}