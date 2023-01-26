// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: STAR_WARS_API_KEY,
  authDomain: STAR_WARS_AUTH_DOMAIN,
  projectId: STAR_WARS_PROJECT_ID,
  storageBucket: STAR_WARS_STORAGE_BUCKET,
  messagingSenderId: STAR_WARS_MESSAGING_SENDER_ID,
  appId: STAR_WARS_APP_ID,
  measurementId:"G-S1EYLYDMS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);