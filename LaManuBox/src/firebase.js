import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiZFkTzcrlhQIPg_fao5QKlwlkc6FpTy4",
  authDomain: "lamanubox.firebaseapp.com",
  projectId: "lamanubox",
  storageBucket: "lamanubox.appspot.com",
  messagingSenderId: "1077074449676",
  appId: "1:1077074449676:web:80dc37bbdcbb80f9b5a529"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);