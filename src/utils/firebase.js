// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-89cbe.firebaseapp.com",
  projectId: "blog-89cbe",
  storageBucket: "blog-89cbe.appspot.com",
  messagingSenderId: "686899010694",
  appId: "1:686899010694:web:13eae247b179d3986ec507"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);