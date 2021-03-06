import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games";
import userReducer from "./user";
import leaguesReducer from "./leagues";

export const store = configureStore({
  reducer: { games: gamesReducer, user: userReducer, leagues: leaguesReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
