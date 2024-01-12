'use client'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchProductsData } from '@/store/products';
import { RootState, AppDispatch } from '@/store';
import Card from '@/components/Card';

const styles = {
  main: 'flex min-h-screen flex-col items-center p-24 border',
  header: 'text-5xl border mb-12',
  productsWrapper: 'w-9/12 flex flex-wrap border'
}
export default function Home() {
  const {products, isLoading, isError} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [])

  return (
    <main className={styles.main}>
        <h1 className={styles.header}>See Products</h1>
        <div className={styles.productsWrapper}>
                   {products.length > 0 &&
                        products.map((item, index) => (
                          <Card
                          key={item.id} 
                          image={item.images[0]}
                          discount={item.discountPercentage}
                          title={item.title}
                          price={item.price}
                          description={item.description}
                          />
                        ))}
        </div>

    </main>
  )
}