// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu4B4cQeW83MUZkD27WeS2wETi4HvV9Ic",
  authDomain: "netflixgpt-27f3f.firebaseapp.com",
  projectId: "netflixgpt-27f3f",
  storageBucket: "netflixgpt-27f3f.appspot.com",
  messagingSenderId: "792188604967",
  appId: "1:792188604967:web:813eaf4c3c92f6a6fef402",
  measurementId: "G-CFMWZB8LT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
