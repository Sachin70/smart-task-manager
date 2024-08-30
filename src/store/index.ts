import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "@/slices/taskSlices";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Define RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
