import { combineReducers } from "redux";

import { useReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: useReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
