import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";
import ShoppingReducer from "./reducers/shoppingReducer";

export const store = configureStore({
  reducer: {
    userReducer: UserReducer,
    shoppingReducer: ShoppingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
