'use client'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from "react";

const styles = {
    wrapper: '',
    header: '',
    inputDiv: 'flex gap-2 text-black mb-2'
}

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => console.log(userCredentials))
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <div className={styles.inputDiv}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='bg-white text-black p-1 rounded' type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;