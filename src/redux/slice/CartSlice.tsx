/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const { imdbID } = item;
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.imdbID === imdbID
      );
      if (itemIndex === -1) {
        state.push({
          ...item,
          quantity: 1,
        });
      } else {
        state[itemIndex].quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.findIndex((cartItem) => cartItem.imdbID === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity--;
        if (state[itemIndex].quantity === 0) {
          state.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
