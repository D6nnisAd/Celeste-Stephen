import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBbTbRQAspFhFFqLopzmuRv-Ucn9RORiYA",
  authDomain: "celeste-stephen.firebaseapp.com",
  projectId: "celeste-stephen",
  storageBucket: "celeste-stephen.firebasestorage.app",
  messagingSenderId: "101988471452",
  appId: "1:101988471452:web:f0343707d46de6fb7a9359"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
    db, 
    auth, 
    doc, 
    getDoc,
    setDoc, 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
};