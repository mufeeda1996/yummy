import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        const existing = state.items.find(i => i.idMeal === item.idMeal);
      
        if (existing) {
          existing.qty += 1;
        } else {
          state.items.push({
            idMeal: item.idMeal,
            name: item.strMeal,           // normalize name
            thumb: item.strMealThumb,     // normalize image
            price: 120,                   // or derive price dynamically
            qty: 1
          });
        }
      },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.idMeal !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
