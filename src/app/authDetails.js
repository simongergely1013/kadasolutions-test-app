'use client'
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from './firebase';
import React, {useState, useEffect} from 'react';

const AuthDetails = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => console.log('Signed out successfully'))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null);
            }
            console.log('user', user)
        })
        return () => {
            listen();
        }
    }, [])
    return(
        <div>
            {currentUser ?
            <>
            <p>{`Signed in as ${currentUser.email}`}</p>
            <button onClick={handleSignOut}>Sign Out</button>
            </>  
            : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails;