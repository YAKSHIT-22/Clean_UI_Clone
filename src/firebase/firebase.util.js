import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID,
// 	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyCaMvkpuglmuVkdyyPCEa-JylrZ0m4E--g",
    authDomain: "hdsenterprise-com.firebaseapp.com",
    projectId: "hdsenterprise-com",
    storageBucket: "hdsenterprise-com.appspot.com",
    messagingSenderId: "771335865445",
    appId: "1:771335865445:web:784b58296417ab77f5728c",
    measurementId: "G-E47HS86Q6Y"
  };



// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const db = getFirestore(app);