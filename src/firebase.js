import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBuqunoUvOO-9EbpjtuNmGRXqQJPlxQW0",
  authDomain: "blog-e80e7.firebaseapp.com",
  projectId: "blog-e80e7",
  storageBucket: "blog-e80e7.appspot.com",
  messagingSenderId: "701212296415",
  appId: "1:701212296415:web:e778520947cee85cb8d56a",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
