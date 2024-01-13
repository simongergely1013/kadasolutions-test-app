'use client';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchProductsData } from '@/store/products';
import React from "react";
import Card from "@/components/Card";
import InfiniteScroll from "react-infinite-scroll-component";


const styles = {
    main: 'flex min-h-screen flex-col justify-center items-center p-16',
    header: 'text-5xl mb-12',
    productsWrapper: 'w-10/12',
}

const Products = () => {
    const [limit, setLimit] = useState(10);
    const {products, hasMore} = useSelector((state: RootState) => state.products);
     const dispatch = useDispatch<AppDispatch>();

const handleNext = () => {
    setTimeout(() => {
        setLimit(limit + 10);
    }, 1500)
}

  useEffect(() => {
    dispatch(fetchProductsData(limit))
  }, [limit])
    return(
        <div className={styles.main}>
        <h1 className={styles.header}>See Products</h1>
        <div id='scrollableDiv' className={styles.productsWrapper}>
            <InfiniteScroll
                dataLength={products.length}
                next={handleNext}
                hasMore={hasMore}
                loader={<h2>Loading...</h2>}
                endMessage={<h2>No more products left</h2>}
                className='flex flex-wrap justify-center items-center'
            >
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
             </InfiniteScroll>
            </div>
        </div>
    )
}

export default Products;