


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import {
  getFirestore
}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7JteEaSYaURN8dsoxXQCUCJ2b2UWgWxw",
  authDomain: "laundry-app-sk.firebaseapp.com",
  projectId: "laundry-app-sk",
  storageBucket: "laundry-app-sk.appspot.com",
  messagingSenderId: "829418378669",
  appId: "1:829418378669:web:b2377ae02af453c2057d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export {auth,db}
