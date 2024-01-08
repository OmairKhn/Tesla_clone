import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'; // Check if this path is correct

export const store = configureStore({
  reducer: {
car: carReducer
  },
});
