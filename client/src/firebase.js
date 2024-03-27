// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-21c7b.firebaseapp.com",
  projectId: "mern-blog-21c7b",
  storageBucket: "mern-blog-21c7b.appspot.com",
  messagingSenderId: "540009678896",
  appId: "1:540009678896:web:f1c87c230ad4d726c6c5f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
