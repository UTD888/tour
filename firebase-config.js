// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqd20lb2fQSMjqsSmzUXXgQFhBNC8sB9g",
  authDomain: "luxutour-63450.firebaseapp.com",
  projectId: "luxutour-63450",
  storageBucket: "luxutour-63450.firebasestorage.app",
  messagingSenderId: "349190270077",
  appId: "1:349190270077:web:c52b936bdc2f06c7db1514",
  measurementId: "G-1F45DPS42M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);