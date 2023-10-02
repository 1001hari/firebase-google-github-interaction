// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOit6ddk9zgZng1rVVOzQ8nJ-5qNzgUGk",
  authDomain: "simple-firebase-5ecc0.firebaseapp.com",
  projectId: "simple-firebase-5ecc0",
  storageBucket: "simple-firebase-5ecc0.appspot.com",
  messagingSenderId: "428444804378",
  appId: "1:428444804378:web:38e981d1d35b9f128b78a3"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default app;