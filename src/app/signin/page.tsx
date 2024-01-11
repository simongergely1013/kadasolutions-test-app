'use client'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from "react";

const styles = {
    wrapper: '',
    header: '',
    inputDiv: 'flex gap-2 text-black'
}

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => console.log(userCredentials))
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <h1>Log in to your account</h1>
                <div className={styles.inputDiv}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
}

export default SignIn;