'use client'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import React, {useState} from "react";

const styles = {
    wrapper: 'border w-full min-h-screen flex justify-center',
    form: 'border w-1/2 flex flex-col items-center',
    header: 'text-2xl p-6',
    inputDiv: 'w-1/3 flex flex-col gap-4 text-black mb-4',
    input: 'p-2',
    button: 'w-1/3 bg-white text-black p-2 rounded'
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
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            router.push('/login');
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.wrapper}>
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