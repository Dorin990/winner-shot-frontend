import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

interface InitialUser extends IUser {
  found: boolean;
}
// Define the initial state using that type
const initialState: InitialUser = {
  id: "",
  name: "",
  imageUrl: "",
  found: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.found = true;
    },
    markAsNotFound: (state) => {
      console.log("Marked as not found");
      state.found = false;
    },
  },
});

export const { setUser, markAsNotFound } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;
