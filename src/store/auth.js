import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialAuthState = {
  loggedIn: false,
  admin: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
      const token = localStorage.getItem("tokenKey");
      const decoded = jwtDecode(token);
      state.admin = decoded.isAdmin;
      toast.success("Logged In");
    },
    logout(state) {
      state.loggedIn = false;
      state.admin = false;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
