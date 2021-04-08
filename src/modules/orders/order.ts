import { TOrder, TOrderBookStream } from "@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TOrderBookStream = { buy: [], sell: [] };

const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    updateBuy: (state, action: PayloadAction<TOrder[]>) => {
      state.buy = action.payload;
    },
    updateSell: (state, action: PayloadAction<TOrder[]>) => {
      state.sell = action.payload;
    },
    updateAll: (state, action: PayloadAction<TOrderBookStream>) => {
      state.buy = action.payload.buy;
      state.sell = action.payload.sell;
    },
  },
});

export const { updateBuy, updateSell, updateAll } = OrderSlice.actions;
export default OrderSlice.reducer;
