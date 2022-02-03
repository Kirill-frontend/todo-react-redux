import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './../slicers/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
});
