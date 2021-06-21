import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

// Define a type for the slice state
interface GamesState {
  availableGames: IGame[];
}

// Define the initial state using that type
const initialState: GamesState = {
  availableGames: [],
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setAvailableGames: (state, action: PayloadAction<IGame[]>) => {
      state.availableGames = action.payload;
    },
  },
});

export const { setAvailableGames } = gamesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default gamesSlice.reducer;
