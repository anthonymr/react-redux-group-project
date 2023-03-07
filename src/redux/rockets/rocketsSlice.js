import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets(state, { payload }) {
      return {
        ...state,
        rockets: payload,
      };
    },
  },
});

export const { setRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
