// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDU80_9TAyNd07_mz1j2wBrAJeg04Uqhk",
  authDomain: "traveltalk-db6aa.firebaseapp.com",
  projectId: "traveltalk-db6aa",
  storageBucket: "traveltalk-db6aa.appspot.com",
  messagingSenderId: "317396814662",
  appId: "1:317396814662:web:76d92995d99b4634e83347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore }; // Export the auth and firestore objects
