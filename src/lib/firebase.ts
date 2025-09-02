
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration
// This is a public config and is safe to expose.
// Security is handled by Firebase Security Rules.
const firebaseConfig = {
  "projectId": "codecircuit-studio",
  "appId": "1:166871467728:web:a32ece38c7c7df44d340d5",
  "storageBucket": "codecircuit-studio.firebasestorage.app",
  "apiKey": "AIzaSyDhqlbJ1k0eORmO71M1jl6DIUURwLqZvvY",
  "authDomain": "codecircuit-studio.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "166871467728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const signUpWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebaseSignInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return signOut(auth);
};
