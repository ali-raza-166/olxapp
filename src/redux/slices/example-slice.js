import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = exampleSlice.actions;
const uiReducer = exampleSlice.reducer;
export default uiReducer;
