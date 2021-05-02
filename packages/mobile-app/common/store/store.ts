import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../auth/store/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
