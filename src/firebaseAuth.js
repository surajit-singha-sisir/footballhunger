// src/firebaseAuth.js
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";  // Assuming firebaseConfig.js is in the same directory

const provider = new GithubAuthProvider();

// GitHub Sign-In
export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User Info:", user);
    return user;  // You can return the user object here or use Vue's state management for better user tracking
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

// GitHub Sign-Out
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};
