import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

// Define the initial state using that type
const initialState: IUser = {
  firstName: "",
  lastName: "",
  imageUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;
