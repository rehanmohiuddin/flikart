import { combineReducers } from "redux";
import cart from "./cart";

const rootReducer = combineReducers({
  cart: cart,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
