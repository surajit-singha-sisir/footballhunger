<template>
  <div>
    <button @click="login">Login with GitHub</button>
    <button v-if="user" @click="logout">Logout</button>
    <div v-if="user">
      <p>Welcome, {{ user.displayName }}!</p>
      <img :src="user.photoURL" alt="User Avatar" />
    </div>
  </div>
</template>

<script>
import { signInWithGitHub, logout } from "@/firebaseConfig"; // Make sure you're importing the correct auth functions

export default {
  data() {
    return {
      user: null,  // To store the logged-in user info
    };
  },
  methods: {
    async login() {
      try {
        const user = await signInWithGitHub(); // Get user after successful login
        this.user = user;  // Store user data
      } catch (error) {
        console.error("Login failed", error);  // Handle any errors during login
      }
    },
    async logout() {
      try {
        await logout();  // Sign out the user
        this.user = null;  // Clear user data
      } catch (error) {
        console.error("Logout failed", error);  // Handle any errors during logout
      }
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
