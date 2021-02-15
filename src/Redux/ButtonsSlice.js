import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    backgroundColor: "#8e8e8e",
    color: "#000",
    border: "",
    padding: 8,
    borderRadius: 0,
  },
  reducers: {
    changeBackgroundColor: (state, action) => ({
      ...state,
      backgroundColor: action.payload.color,
    }),
    changeColor: (state, action) => ({
      ...state,
      color: action.payload.color,
    }),
    changeBorder: (state, action) => ({
      ...state,
      border: action.payload.border,
    }),
    changePadding: (state, action) => ({
      ...state,
      padding: action.payload.padding,
    }),
    changeBorderRadius: (state, action) => ({
      ...state,
      borderRadius: action.payload.radius,
    }),
  },
});

export const {
  changeBackgroundColor,
  changeColor,
  changeBorder,
  changePadding,
  changeBorderRadius,
} = buttonSlice.actions;
export default buttonSlice.reducer;
