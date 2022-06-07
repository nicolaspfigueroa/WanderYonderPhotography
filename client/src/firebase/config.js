// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY48cWPi8i4H4bGfP0u7FvUmbisad9aIQ",
  authDomain: "austin-bennett-photography.firebaseapp.com",
  projectId: "austin-bennett-photography",
  storageBucket: "austin-bennett-photography.appspot.com",
  messagingSenderId: "475100309987",
  appId: "1:475100309987:web:f3333ddc2829ddf94a98d6",
  measurementId: "G-Z4FE6781RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };