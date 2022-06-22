import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: []
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state, action) {
      state.items = [];
    },
  },
});

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
