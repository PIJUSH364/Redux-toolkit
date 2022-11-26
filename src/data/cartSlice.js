import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [...state.cartProductIds, action.payload];
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

//? if we destructure the its look like that
// const { actions: cartactions, reducer: cartReducer } = cartSlice;

export default cartSlice;
