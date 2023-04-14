/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: (contact) => {
        const id = nanoid();
        return { payload: { id, ...contact } };
      },
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
