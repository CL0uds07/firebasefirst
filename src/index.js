// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmTdOiCJhn_JUsMUHx2l5gCl20t0edmOU",
  authDomain: "gettingstartedwithfireba-55054.firebaseapp.com",
  projectId: "gettingstartedwithfireba-55054",
  storageBucket: "gettingstartedwithfireba-55054.appspot.com",
  messagingSenderId: "988498810941",
  appId: "1:988498810941:web:8ac36c8c14b72cccdff254",
  measurementId: "G-HZB7BQN5KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)