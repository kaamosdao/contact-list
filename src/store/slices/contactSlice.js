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
        const relations = contact.relations.map((item) => ({
          id: nanoid(),
          ...item,
        }));
        const contactWithIds = { id: nanoid(), ...contact, relations };
        return { payload: contactWithIds };
      },
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
