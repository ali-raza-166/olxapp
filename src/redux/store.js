import { configureStore } from "@reduxjs/toolkit";

// import uiReducer from "./ui-slice";
// import cartReducer from "./cart-slice";
import authReducer from "./slices/auth-slice";
import homeReducer from "./slices/home-slice";
import filterReducer from "./slices/filter-slice";
import favoriteReducer from "./slices/favorite-slice";

const store = configureStore({
  // reducer: { ui: uiReducer, cart: cartReducer },
  reducer: {
    auth: authReducer,
    home: homeReducer,
    filter: filterReducer,
    favorites: favoriteReducer,
  },
});

export default store;
