// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1CFHQ7R-uDaKsdWAiV-H6ihG6p26cQrs",
  authDomain: "book-9385e.firebaseapp.com",
  projectId: "book-9385e",
  storageBucket: "book-9385e.firebasestorage.app",
  messagingSenderId: "845987506302",
  appId: "1:845987506302:web:80f3957b6b99687646102f",
  measurementId: "G-X4VY3BZXCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
