// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpqJUyEa4uq0IIDOaxWaNE7uRIqaRGwI",
  authDomain: "ema-john-simple-2b644.firebaseapp.com",
  projectId: "ema-john-simple-2b644",
  storageBucket: "ema-john-simple-2b644.appspot.com",
  messagingSenderId: "1010530547549",
  appId: "1:1010530547549:web:570665300ff11f03699ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;