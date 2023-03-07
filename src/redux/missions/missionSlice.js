import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions(state, { payload }) {
      return {
        ...state,
        missions: payload,
      };
    },
  },
});

export const { setMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
