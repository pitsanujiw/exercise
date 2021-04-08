import { createStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import Order from "./orders/order";

const reducers = combineReducers({
  orders: Order,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
