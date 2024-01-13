'use client';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { clearCart } from "@/store/cart";
import React, {useState, useEffect} from "react";
import Card from "@/components/Card";
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    main: 'flex min-h-screen flex-col items-center p-16',
    header: 'text-5xl mb-12',
    cartWrapper: 'w-10/12 flex flex-wrap justify-center items-center mb-12',
    buttonContainer: 'flex justify-center items-center gap-4',
    button: 'w-64 h-14 bg-[#6100FF] text-white text-lg font-semibold rounded-3xl border'
}

const Cart = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const {cart} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch<AppDispatch>();

    const handlePurchase = () => {
        if(currentUser !== null){
            toast.success('Purchased items successfully!', {
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
        } else {
            toast.error('Log in or create an account', {
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
    }

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.info('Cart cleared.', {
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
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null);
            }
        })
    }, [])
    return(
        <>
        <div className={styles.main}>
            {cart.length > 0 ? 
            <>
            <h1 className={styles.header}>Your cart</h1>
             <div className={styles.cartWrapper}>
                {cart.map((item) => (
                        <Card
                        id={item.id}
                        key={item.id} 
                        image={item.images[0]}
                        discount={item.discountPercentage}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        />
                    ))
                }
             </div>
             <div className={styles.buttonContainer}>
             <button className={styles.button} onClick={handlePurchase}>Purchase</button>
             <button className={styles.button} onClick={handleClearCart}>Clear cart</button>
             </div>
            </>    
            : <h1 className={styles.header}>Cart is empty</h1>
        }
        </div>
        <ToastContainer/>
        </>
    )
}

export default Cart;