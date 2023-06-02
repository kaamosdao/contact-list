/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactSuccess: (state, { payload }) => {
      state.items.push(payload);
    },
    setContactsSuccess: (state, { payload }) => {
      state.items = payload;
    },
    updateContactSuccess: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
    },
    deleteContactSuccess: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const addContact = createAction('contacts/addContact');
export const getContacts = createAction('contacts/getContacts');
export const updateContact = createAction('contacts/updateContact');
export const deleteContact = createAction('contacts/deleteContact');

export const {
  addContactSuccess,
  setContactsSuccess,
  updateContactSuccess,
  deleteContactSuccess,
  setLoading,
} = contactSlice.actions;

export default contactSlice.reducer;
