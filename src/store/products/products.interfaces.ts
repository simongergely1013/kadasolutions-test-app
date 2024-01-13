export interface Product {
    id: number | null;
    title: string;
    description: string;
    price: number | null;
    discountPercentage: number | null;
    rating: number | null;
    stock: number | null;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}

export interface ProductsState {
    products: Array<Product>;
    isLoading: boolean;
    isError: boolean;
}