import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3u1UIt4vX-0d4XE8S1SkW_dFUEE4x3Cg",
  authDomain: "react-movie-tracker-f6549.firebaseapp.com",
  projectId: "react-movie-tracker-f6549",
  storageBucket: "react-movie-tracker-f6549.appspot.com",
  messagingSenderId: "997533798549",
  appId: "1:997533798549:web:a528db7ec96357823d8b9c"
};

export const app = initializeApp(firebaseConfig);

// Firestore Setup 

const firestoreDb = getFirestore()

export const myListCollection = collection(firestoreDb, "myList")