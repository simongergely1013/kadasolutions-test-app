'use client';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";
import React, {useState, useEffect} from "react";
import Link from "next/link";

const styles = {
    main: 'w-full h-24 flex items-center gap-6 p-10 border'
};

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

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
        <div className={styles.main}>
            <Link href={"/"}>Home</Link>
            <Link href={"/signup"}>Sign Up</Link>
            <Link href={"/login"}>{currentUser !== null ? 'Log Out' : 'Log In'}</Link>
            <Link href={"/cart"}>Cart</Link>
        </div>    
    )
}

export default NavBar;