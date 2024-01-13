'use client';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { fetchSingleProductData } from "@/store/singleProduct";
import { addToCart } from "@/store/cart";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    main: 'flex min-h-screen flex-col justify-center items-center p-16 border',
    header: 'text-5xl mb-12 border',
    productWrapper: 'w-3/4 h-[480px] flex justify-center border',
    imageContainer: 'w-1/2 h-full flex justify-center items-center border',
    image: 'w-full h-full',
    infoContainer: 'w-1/2 h-full flex flex-col justify-between px-12 border',
    rowTop: 'w-full flex justify-between items-center border',
    rowMiddle: 'w-full flex flex-col border',
    rowBottom: 'w-full flex justify-between items-center border',
    title: 'text-4xl font-semibold border',
    rating: 'text-2xl font-semibold border',
    description: 'text-2xl font-medium border',
    details: 'flex flex-col gap-2 text-2xl font-light border',
    discount: 'w-28 h-12 flex justify-center items-center bg-[#6100FF] text-sm font-semibold rounded-3xl',
    price: 'text-[64px] font-semibold border',
    button: 'w-64 h-16 text-lg font-semibold rounded-3xl border'
}

const SingleProduct = ({params}: {params: {id: number}}) => {
    const {product} = useSelector((state: RootState) => state.singleProduct);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
            dispatch(addToCart(product));
            toast.success('Item added to cart!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
    }

    useEffect(() => {
        dispatch(fetchSingleProductData(params.id));
    }, [])
    return(
        <>
        <div className={styles.main}>
            <div className={styles.productWrapper}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={product.images[0]}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.rowTop}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <div className={styles.rating}>{product.rating}</div>
                    </div>
                        <p className={styles.description}>{product.description}</p>
                        <div className={styles.details}>
                            <p>Stock: {product.stock}</p>
                            <p>Brand: {product.brand}</p>
                            <p>Category: {product.category}</p>
                        </div>
                        <div className={styles.discount}>-{product.discountPercentage}%</div>
                    <div className={styles.rowBottom}>
                        <h1 className={styles.price}>{product.price} $</h1>
                        <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    )   
}

export default SingleProduct;