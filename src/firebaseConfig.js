// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8rxLrPqn3io-04UqVgCukLnsVo9-TcIg",
  authDomain: "tocook-a8416.firebaseapp.com",
  projectId: "tocook-a8416",
  storageBucket: "tocook-a8416.firebasestorage.app",
  messagingSenderId: "363210066039",
  appId: "1:363210066039:web:ecaccfc8e9d7cc185d1e72",
  measurementId: "G-S7GP294RMK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export Firebase auth and database
export const auth = firebase.auth();
export const database = firebase.database();
export default app;
