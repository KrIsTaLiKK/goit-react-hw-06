import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: '',
  },
  reducers: {
    searchContacts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchContacts } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
