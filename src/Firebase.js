import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUQvu5YBISiCDAsA1CH1fQKIRyuFbZdIA",
  authDomain: "chatapp-f9daf.firebaseapp.com",
  projectId: "chatapp-f9daf",
  storageBucket: "chatapp-f9daf.appspot.com",
  messagingSenderId: "604907772998",
  appId: "1:604907772998:web:2cb42426dcec9097affe47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
