import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Signup logic: User creation and auto-login after successful signup
    signup: (state, action) => {
      const { username, password } = action.payload;
      const userExists = state.users.find((user) => user.username === username);
      if (userExists) {
        state.error = "User already exists";
      } else {
        // Add user and log them in automatically
        state.users.push({ username, password });
        state.error = null;
        state.currentUser = username;
        state.isLoggedIn = true;
      }
    },

    // Login logic: Verify user credentials and login
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find((user) => user.username === username);
      if (!user) {
        state.error = "User not found";
      } else if (user.password !== password) {
        state.error = "Incorrect password";
      } else {
        state.currentUser = username; // Set logged-in user
        state.isLoggedIn = true;
        state.error = null;
      }
    },

    // Logout logic: Reset current user and set isLoggedIn to false
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
    },

    // Clear the error state (useful for clearing errors after actions like login/signup)
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Export actions to use in components
export const { signup, login, logout, clearError } = authSlice.actions;

// Export the reducer to use in the store
export default authSlice;
