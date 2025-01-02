// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


// Firebase configuration object (Replace with your Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyA_e0Aql4ijW19jH0taVxIbMgWpw0b4-Lw",
    authDomain: "fir-owais.firebaseapp.com",
    projectId: "fir-owais",
    storageBucket: "fir-owais.firebasestorage.app",
    messagingSenderId: "858305089949",
    appId: "1:858305089949:web:1e2ae7e653dbc45dfd5f74"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const handleGoogleSignUp = (navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Successful sign-up
      // You can access the user information here if needed
      const user = result.user;
      // Redirect to home page
      navigate('/');
    })
    .catch((error) => {
      // Handle Errors here.
      console.error('Error during Google sign-up:', error);
    });
};



// Logout function
export const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have successfully logged out.");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed. Please try again.");
    }
  };


  // ../utils/firebase.js
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const handleGoogleLogin = (navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then((result) => {
      // Successful login
      // You can access the user information here if needed
      const user = result.user;
      // Redirect to home page
      navigate('/');
    })
    .catch((error) => {
      // Handle Errors here.
      console.error('Error during Google login:', error);
    });
};
