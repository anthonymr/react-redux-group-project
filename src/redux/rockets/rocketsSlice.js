import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data.map(
      (rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        description: rocket.description,
      }),
    );
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, { payload }) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== payload) { return rocket; }
        return { ...rocket, reserved: true };
      });

      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, { payload }) => ({ ...state, rockets: payload }));
  },
});

export const { bookRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
