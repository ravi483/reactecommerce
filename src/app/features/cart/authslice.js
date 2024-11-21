import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const storedToken = localStorage.getItem("token") || null;

const initialState = {
  user: storedUser,
  token: storedToken,
  isAuthenticated: !!storedToken,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password, token } = action.payload;

      // Save user and token in localStorage
      localStorage.setItem("user", JSON.stringify({ username }));
      localStorage.setItem("token", token);

      state.user = { username };
      state.token = token;
      state.isAuthenticated = true;
      state.error = null;
    },
    login: (state, action) => {
      const { username, password, token } = action.payload;

      // Validate user credentials (fake validation for demo)
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.username === username) {
        // Save token in localStorage
        localStorage.setItem("token", token);

        state.user = storedUser;
        state.token = token;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid username or password.";
      }
    },
    logout: (state) => {
      // Remove user and token from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;