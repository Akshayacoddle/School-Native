import {configureStore} from '@reduxjs/toolkit';
import examReducer from './redux';

export const store = configureStore({
  reducer: {
    exam: examReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
