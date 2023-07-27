import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Storage, API } from "aws-amplify";
const homeSlice = createSlice({
  name: "home",
  initialState: {
    ads: [],
  },
});

const homeReducer = homeSlice.reducer;

export default homeReducer;
