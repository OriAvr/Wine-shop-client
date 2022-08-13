import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Logged In");
    },
    logout(state) {
      state.loggedIn = false;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
