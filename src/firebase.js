import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuHGoMh0fqqF6zyRHAO4sfl_9RHPICFs4",
  authDomain: "chatdecember.firebaseapp.com",
  projectId: "chatdecember",
  storageBucket: "chatdecember.appspot.com",
  messagingSenderId: "44989931586",
  appId: "1:44989931586:web:838c07beac708bc6970ddb"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const storage = getStorage();

export const db = getFirestore()








