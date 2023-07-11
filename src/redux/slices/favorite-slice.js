import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    fav: [],
  },
  reducers: {},
});

const favoriteReducer = favoriteSlice.reducer;

export default favoriteReducer;
