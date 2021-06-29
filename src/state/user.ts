import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

// Define the initial state using that type
const initialState: IUser = {
  id: "",
  name: "",
  imageUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;
