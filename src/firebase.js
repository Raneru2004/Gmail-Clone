import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCka_He1DOmRCdj0iuF58HR_d2BNbTM2t0",
  authDomain: "clone-917e4.firebaseapp.com",
  projectId: "clone-917e4",
  storageBucket: "clone-917e4.appspot.com",
  messagingSenderId: "42418403118",
  appId: "1:42418403118:web:f046eafd7e288359edecbf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const db = getFirestore();

const auth = getAuth();

export {db, auth, provider, firebaseApp};

