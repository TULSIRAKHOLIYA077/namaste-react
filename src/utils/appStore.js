import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
  reducer:{   //   app reducer
    cart: cartReducer,  //   slice reducer
  }
});

export default appStore;