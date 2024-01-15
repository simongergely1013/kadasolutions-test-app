'use client';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { fetchSingleProductData } from "@/store/singleProduct";
import { addToCart } from "@/store/cart";
import { renderStars } from './renderStars';
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    main: 'min-h-screen flex flex-col justify-center items-center p-16',
    header: 'text-5xl mb-12',
    productWrapper: 'w-3/4 h-[480px] flex justify-center',
    imageContainer: 'w-1/2 h-full flex justify-center items-center',
    image: 'w-full h-full',
    infoContainer: 'w-1/2 h-full flex flex-col justify-between px-2',
    rowTop: 'w-full flex justify-between items-center',
    rowMiddle: 'w-full flex flex-col',
    rowBottom: 'w-full flex justify-between items-center',
    title: 'text-4xl font-semibold',
    rating: 'flex items-center justify-center text-2xl font-semibold',
    starContainer: 'flex justify-center items-center gap-1 mr-2',
    description: 'text-2xl font-medium',
    details: 'flex flex-col gap-2 text-2xl font-light',
    discount: 'w-28 h-12 flex justify-center items-center bg-[#6100FF] text-white text-xl font-semibold rounded-3xl',
    price: 'text-[64px] font-semibold',
    button: 'w-56 h-16 bg-black text-white text-[28px] font-semibold rounded-[30px] border',
}

const SingleProduct = ({params}: {params: {id: number}}) => {
    const {product} = useSelector((state: RootState) => state.singleProduct);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
            dispatch(addToCart(product));
            toast.success('Item added to cart!', {
                position: "top-center",
                autoClose: 3000,
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
                        <div className={styles.rating}>
                        <div className={styles.starContainer}>{renderStars(product.rating)}</div>{product.rating}</div>
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