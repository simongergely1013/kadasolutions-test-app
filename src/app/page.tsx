'use client'
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from './firebase';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { setProducts } from '@/store/products';
import { RootState } from '@/store';
import axios from 'axios';

const styles = {
  main: 'flex min-h-screen flex-col items-center justify-between border'
}
export default function Home() {
  const {products} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const {data} = await axios('https://dummyjson.com/products')
     dispatch(setProducts(data.products));
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <main className={styles.main}>
        <h1>See Products</h1>
 
    </main>
  )
}