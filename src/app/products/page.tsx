'use client';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchProductsData } from '@/store/products';
import React from "react";
import Card from "@/components/Card";

const styles = {
    main: 'flex min-h-screen flex-col justify-center items-center p-16',
    header: 'text-5xl mb-12',
    productsWrapper: 'w-9/12 flex flex-wrap justify-center items-center border'
}

const Products = () => {
    const {products} = useSelector((state: RootState) => state.products);
     const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [])
    return(
        <div className={styles.main}>
        <h1 className={styles.header}>See Products</h1>
        <div className={styles.productsWrapper}>
        {products.length > 0 &&
             products.map((item) => (
               <Card
               id={item.id}
               key={item.id} 
               image={item.images[0]}
               discount={item.discountPercentage}
               title={item.title}
               price={item.price}
               description={item.description}
               />
             ))}
            </div>
        </div>
    )
}

export default Products;