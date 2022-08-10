// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBInFhLi4C2uUvkRKrEv4cH4SSjp8dWSkI",
  authDomain: "insta-reels-app.firebaseapp.com",
  projectId: "insta-reels-app",
  storageBucket: "insta-reels-app.appspot.com",
  messagingSenderId: "685346838457",
  appId: "1:685346838457:web:7846b56a2764d8ba6dc868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };