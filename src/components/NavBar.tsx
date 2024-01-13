'use client';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";
import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";

const styles = {
    main: 'w-full h-24 flex items-center justify-between bg-black text-white font-semibold p-10',
    leftSide: 'flex gap-12',
    rightSide: 'pr-10',
    link: 'flex justify-center items-center',
};

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const {cart} = useSelector((state: RootState) => state.cart);

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
            <div className={styles.leftSide}>
            <Link href={"/"}>Products</Link>
            <Link href={"/signup"}>Sign Up</Link>
            <Link href={"/login"}>{currentUser !== null ? 'Log Out' : 'Log In'}</Link>
            </div>
            <div className={styles.rightSide}>
             <Link className={styles.link} href={"/cart"}><TiShoppingCart className="w-8 h-8 mr-3"/>{cart.length}</Link>
            </div>
        </div>    
    )
}

export default NavBar;