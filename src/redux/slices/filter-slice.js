import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    currentFilter: "",
    result: [],
  },
  reducers: {},
});

const filterReducer = filterSlice.reducer;

export default filterReducer;
