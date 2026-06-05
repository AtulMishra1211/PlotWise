// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUt3Sds5AqmGexgKYYvSU2fFBd67cGrbk",
  authDomain: "plotwise-a97b3.firebaseapp.com",
  projectId: "plotwise-a97b3",
  storageBucket: "plotwise-a97b3.firebasestorage.app",
  messagingSenderId: "388251322946",
  appId: "1:388251322946:web:58372da1cedf93c2447bdb",
  measurementId: "G-DRZPNSGYSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();