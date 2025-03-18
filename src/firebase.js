// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBkKwPpOzCZvqARHK4C7jm0DT2b51Lmuig",
    authDomain: "realorfake-5ec3c.firebaseapp.com",
    projectId: "realorfake-5ec3c",
    storageBucket: "realorfake-5ec3c.firebasestorage.app",
    messagingSenderId: "44585428627",
    appId: "1:44585428627:web:d4e82f4581f7c0ca97cf66",
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
