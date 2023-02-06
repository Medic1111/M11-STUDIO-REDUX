import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  totalAmount: 0,
  totalItems: 0,
  cartItems: [{ item: null, quantity: 0 }],
};

export const cartSlice = createSlice({
  name: "CART",
  reducers: {
    addToCart: (state, action) => {
      state.totalAmount += action.payload.quantity * action.payload.item.price;
      state.totalItems += action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      state.totalAmount -= action.payload.quantity * action.payload.item.price;
      state.totalItems -= action.payload.quantity;
    },
    checkout: (state) => {
      return (state = cartInitialState);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
