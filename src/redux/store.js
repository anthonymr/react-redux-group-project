import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    misions: missionsReducer,
  },
});

export default store;
