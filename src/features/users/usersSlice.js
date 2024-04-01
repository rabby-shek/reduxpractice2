import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Rabby" },
  { id: 2, name: "shek" },
  { id: 3, name: "suvo" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
