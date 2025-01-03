// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWdNhcgChsvwSnSNolZD2br2NCWbfbWug",
  authDomain: "footballhunger-58fdd.firebaseapp.com",
  projectId: "footballhunger-58fdd",
  storageBucket: "footballhunger-58fdd.firebasestorage.app",
  messagingSenderId: "453103569441",
  appId: "1:453103569441:web:aaca6bf140aa1da4713160",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


