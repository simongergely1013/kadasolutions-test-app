'use client'
import {auth} from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/store/cart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import React, {useState, useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    wrapper: 'border w-full min-h-screen flex justify-center pt-4',
    form: 'border w-1/2 flex flex-col items-center',
    header: 'text-2xl p-6',
    inputDiv: 'w-1/3 flex flex-col gap-4 text-black mb-4',
    input: 'p-2',
    button: 'w-1/3 bg-white text-black p-2 rounded'
}

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            console.log(userCredentials);
            toast.success('Logged in successfully!', {
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
        } )
        .catch(error => console.log(error))
    }

    const handleLogOut = () => {
        signOut(auth)
        .then(() =>{
            console.log('Logged out successfully')
            toast.info('Logged out seccessfully!', {
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
        })
        .catch(error => console.log(error))
      }

      useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])
    return(
        <>
        <div className={styles.wrapper}>
            {currentUser !== null ? 
            <div className='w-1/2 flex flex-col items-center gap-4'>
             <h1 className={styles.header}>{`Logged in as ${currentUser.email}`}</h1>
             <button className={styles.button} onClick={handleLogOut}>Log out</button>
            </div>
            :
            <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.header}>Log in to your account</h1>
            <div className={styles.inputDiv}>
            <input className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={styles.button} type="submit" onClick={handleSubmit}>Log In</button>
        </form>
        }
        </div>
        <ToastContainer/>
        </>
    )
}

export default LogIn;