import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  () => axios.get('https://api.spacexdata.com/v3/missions'),
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, { payload }) => ({ ...state, rockets: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, { payload }) => (
      {
        ...state,
        missions: payload.data.map(
          (mission) => ({
            id: mission.mission_id,
            name: mission.mission_name,
            description: mission.description,
          }),
        ),
      }
    ));
  },
});

export const { setMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
