// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOFfHC2J660BPdhn_0Lca2AFYj9BMguI",
  authDomain: "reels-531e8.firebaseapp.com",
  projectId: "reels-531e8",
  storageBucket: "reels-531e8.appspot.com",
  messagingSenderId: "1052816815217",
  appId: "1:1052816815217:web:e3bd0e974bd2b1cb4f17d0",
  measurementId: "G-9WZ37SMC3C"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();



export default db;