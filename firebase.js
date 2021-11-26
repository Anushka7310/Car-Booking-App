// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCp984kzknvZ6ejkAL70Hcjpdao9Fb0m7g",
  authDomain: "car-booking-app-80151.firebaseapp.com",
  projectId: "car-booking-app-80151",
  storageBucket: "car-booking-app-80151.appspot.com",
  messagingSenderId: "414705768867",
  appId: "1:414705768867:web:eb02e8bc2ac9be25b8a216",
  measurementId: "G-C7NYSJX08E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }