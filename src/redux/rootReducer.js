import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";

export const rootReducer = combineReducers({
  orderInfo: orderReducer,
});