import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';

export const store = configureStore({         // creating store
  reducer: {
      users : UserSlice ,    // in users all data are stored
  },
})