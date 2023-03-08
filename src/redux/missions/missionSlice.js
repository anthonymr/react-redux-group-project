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
    reserveMission: (state, { payload }) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.id !== payload) { return mission; }
        return { ...mission, reserved: true };
      });

      return {
        ...state,
        missions: newMissions,
      };
    },
    leaveMission: (state, { payload }) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.id !== payload) { return mission; }
        return { ...mission, reserved: false };
      });

      return {
        ...state,
        missions: newMissions,
      };
    },
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

export const { reserveMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
