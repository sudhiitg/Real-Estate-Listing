// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-2de63.firebaseapp.com",
  projectId: "mern-estate-2de63",
  storageBucket: "mern-estate-2de63.appspot.com",
  messagingSenderId: "182056229858",
  appId: "1:182056229858:web:ca7aead7ef9c45434337bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);