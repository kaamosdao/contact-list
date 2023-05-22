/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

import LocalStorageData from '../../utils/localStorageData';

const localStorageTodo = new LocalStorageData('contactList');

const getInitContacts = () => {
  if (localStorageTodo.hasData()) {
    return localStorageTodo.getData().contacts;
  }
  return [];
};

const initialState = {
  items: getInitContacts(),
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: (contact) => ({ payload: { id: nanoid(), ...contact } }),
    },
    updateContact: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, updateContact, deleteContact, setFilter } =
  contactSlice.actions;

export default contactSlice.reducer;
