// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN2JXDx7EBuWJ71idmSGmYn9iB9LkvD70",
  authDomain: "kadasolutions-test-app.firebaseapp.com",
  projectId: "kadasolutions-test-app",
  storageBucket: "kadasolutions-test-app.appspot.com",
  messagingSenderId: "150115894902",
  appId: "1:150115894902:web:923323b795107f97554157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);