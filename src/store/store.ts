import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customersSlice";

export const store = configureStore({
  reducer: {
    customers: customerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
