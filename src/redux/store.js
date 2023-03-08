import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
