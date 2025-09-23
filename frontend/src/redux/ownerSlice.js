import { createSlice } from "@reduxjs/toolkit";

const ownerSlice = createSlice({
  name: "owner",
  initialState: {
    myShopData: null
    // myShopItems: null
  },
  reducers: {
    setMyShopData: (state, action) => {
      state.myShopData = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    }
  }
});

export const { setMyShopData } = ownerSlice.actions;

export default ownerSlice.reducer;
