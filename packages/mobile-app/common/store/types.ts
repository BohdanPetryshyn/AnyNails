import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { store } from './store';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AnyAction
>;
