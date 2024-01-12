'use client'
import {auth} from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import React, {useState, useEffect} from "react";

const styles = {
    wrapper: 'border w-full min-h-screen flex justify-center',
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

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            console.log(userCredentials);
            toast('Logged in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                router.push('/');
        } )
        .catch(error => console.log(error))
    }

    const handleLogOut = () => {
        signOut(auth)
        .then(() =>{
            console.log('Logged out successfully')
            toast('Logged out successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
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
        <div className={styles.wrapper}>
            {currentUser !== null ? 
            <div className='border w-1/2 flex flex-col items-center gap-6'>
             <h1>{`Currently logged in as ${currentUser.email}`}</h1>
             <button className={styles.button} onClick={handleLogOut}>Log out</button>
             <ToastContainer/>
            </div>
            :
            <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.header}>Log in to your account</h1>
            <div className={styles.inputDiv}>
            <input className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className={styles.input} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={styles.button} type="submit" onClick={handleSubmit}>Log In</button>
            <ToastContainer/>
        </form>
        }
        </div>
    )
}

export default LogIn;