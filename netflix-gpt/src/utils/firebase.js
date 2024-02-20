// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOpoUmmxShThggO3XYb6WlIbz1T3I_a2c",
  authDomain: "netflixgpt2-f4fb6.firebaseapp.com",
  projectId: "netflixgpt2-f4fb6",
  storageBucket: "netflixgpt2-f4fb6.appspot.com",
  messagingSenderId: "32674366575",
  appId: "1:32674366575:web:09ae6c8c60f446df5bf99a",
  measurementId: "G-CD12F3WNTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);