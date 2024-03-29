import { createSlice } from '@reduxjs/toolkit';

const AppReducer = createSlice({
  name: 'App',
  initialState: {},
  reducers: {
    getUser: () => {},
    increment: (state, action) => {
      state.count += 1;
    },
    getMatches: () => {},
  },
});

export const { getUser, increment, getMatches } = AppReducer.actions;
export default AppReducer.reducer;
