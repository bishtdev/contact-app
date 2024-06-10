// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv4CxNinA2gKiBW-DjKEFRcCOsnr6WaDI",
  authDomain: "vite-contact-6fbcd.firebaseapp.com",
  projectId: "vite-contact-6fbcd",
  storageBucket: "vite-contact-6fbcd.appspot.com",
  messagingSenderId: "4487705663",
  appId: "1:4487705663:web:6c080d488e81e740ca348a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)