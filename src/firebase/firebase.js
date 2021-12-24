// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBilUURkTo7xzG2R4ArlPCFbmKfOFxiAS0",
  authDomain: "spring-3.firebaseapp.com",
  projectId: "spring-3",
  storageBucket: "spring-3.appspot.com",
  messagingSenderId: "230192732381",
  appId: "1:230192732381:web:76789ae7a6e0c3788ae334",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { db, google, facebook };
