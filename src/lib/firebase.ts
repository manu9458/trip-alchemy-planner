
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// NOTE TO USER: Replace these placeholder values with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyAME9PLE8MTrFax5XmGvfzw4kvfvxWK9nE",
  authDomain: "notebook-c0cff.firebaseapp.com",
  projectId: "notebook-c0cff",
  storageBucket: "notebook-c0cff.firebasestorage.app",
  messagingSenderId: "187106323952",
  appId: "1:187106323952:web:31488ea3c6a54c34110135",
  measurementId: "G-NXJ2RSV14G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
