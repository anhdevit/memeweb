// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyB4vHIKuVmk48dvtxCDKLuDwBRnItTSfD4",
  authDomain: "meme-a31d6.firebaseapp.com",
  projectId: "meme-a31d6",
  storageBucket: "meme-a31d6.appspot.com",
  messagingSenderId: "505685977141",
  appId: "1:505685977141:web:2dfb98dfc3c7a59cb4a97c",
  measurementId: "G-M0ZPTB9HH3"
};

// Initialize Firebase
export const firebase = firebase.initializeApp(firebaseConfig);