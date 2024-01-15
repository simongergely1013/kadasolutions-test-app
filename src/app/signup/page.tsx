'use client'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';
import React, {useState} from "react";

const styles = {
    main: 'flex min-h-screen flex-col items-center p-16',
    form: 'w-1/2 flex flex-col items-center',
    header: 'text-3xl font-semibold mb-12',
    inputDiv: 'w-1/3 flex flex-col gap-4 text-black mb-8',
    input: 'p-2 border border-black rounded',
    button: 'w-64 h-12 bg-black text-white text-lg font-semibold rounded-3xl border'
}

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
            toast('Signed up successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setTimeout(() => {
                router.push('/login');
            }, 3500);
        })
        .catch(error =>{
            console.log(error)
            toast.error('Invalid email or password', {
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
            setEmail('');
            setPassword('');    
        })
    }
    return(
        <div className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.header}>Create account</h1>
                <div className={styles.inputDiv}>
                <input className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.button} type="submit" onClick={handleSubmit}>Sign Up</button>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default SignUp;