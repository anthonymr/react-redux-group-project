import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  () => axios.get('https://api.spacexdata.com/v3/rockets'),
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, { payload }) => ({ ...state, rockets: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, { payload }) => (
      {
        ...state,
        rockets: payload.data.map(
          (rocket) => ({
            id: rocket.rocket_id,
            name: rocket.rocket_name,
            type: rocket.rocket_type,
            flickr_images: rocket.flickr_images,
            description: rocket.description,
          }),
        ),
      }
    ));
  },
});

export const { setRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
