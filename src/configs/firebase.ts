import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBEsNFqtyTim_oe5TrweSr9XTqaULXhRvQ",
  authDomain: "super-chat-by-utsho.firebaseapp.com",
  projectId: "super-chat-by-utsho",
  storageBucket: "super-chat-by-utsho.appspot.com",
  messagingSenderId: "790402361198",
  appId: "1:790402361198:web:18d6e83ab0d45ca73e837f",
  measurementId: "G-L3TBCZSCS1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messagesRef = collection(db, "messages");
