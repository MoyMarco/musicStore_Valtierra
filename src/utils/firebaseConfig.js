// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgxkWkP9M44nsUfLmIa2bBs2ZELoRyaUE",
  authDomain: "music-store-5b927.firebaseapp.com",
  projectId: "music-store-5b927",
  storageBucket: "music-store-5b927.appspot.com",
  messagingSenderId: "1056840536228",
  appId: "1:1056840536228:web:33b9933030573b4b825631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;