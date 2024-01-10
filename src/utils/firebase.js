// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "just-blog-59f21.firebaseapp.com",
  projectId: "just-blog-59f21",
  storageBucket: "just-blog-59f21.appspot.com",
  messagingSenderId: "802882453183",
  appId: "1:802882453183:web:52fd9ee57409f21c17d00a",
  measurementId: "G-FEPNRJ7T22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
