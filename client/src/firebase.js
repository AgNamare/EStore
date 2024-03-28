// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "store-8a58a.firebaseapp.com",
  projectId: "store-8a58a",
  storageBucket: "store-8a58a.appspot.com",
  messagingSenderId: "259659118823",
  appId: "1:259659118823:web:21b4d8088e810271ca8a42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);