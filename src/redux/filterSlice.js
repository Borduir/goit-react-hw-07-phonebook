import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filtre',
  initialState: '',
  reducers: {
    filtreChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filtreChange } = filterSlice.actions;
