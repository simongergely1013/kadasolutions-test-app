import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from './firebase';
import { useState, useEffect } from 'react';
import SignUp from "./signup/page";
import SignIn from "./signin/page";

const styles = {
  main: 'flex min-h-screen flex-col items-center justify-between p-24'
}
export default function Home() {
  // const [currentUser, setCurrentUser] = useState(null);


    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user) => {
    //         if(user) {
    //             setCurrentUser(user)
    //         } else {
    //             setCurrentUser(null);
    //         }
    //     })
    //     return () => {
    //         listen();
    //     }
    // }, [])
  return (
    <main className={styles.main}>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <h1>Hello</h1> */}
    </main>
  )
}