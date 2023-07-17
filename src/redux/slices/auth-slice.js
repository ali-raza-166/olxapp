import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
