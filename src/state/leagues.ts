import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

// Define a type for the slice state
interface LeaguesState {
  leagues: ILeague[];
}

// Define the initial state using that type
const initialState: LeaguesState = {
  leagues: [],
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {
    setLeagues: (state, action: PayloadAction<ILeague[]>) => {
      state.leagues = action.payload;
    },
  },
});

export const { setLeagues } = leaguesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default leaguesSlice.reducer;
