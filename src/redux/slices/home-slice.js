import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    ads: [],
  },
});

const homeReducer = homeSlice.reducer;

export default homeReducer;
