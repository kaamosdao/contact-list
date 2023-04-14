import { createSelector } from '@reduxjs/toolkit';

const selectContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => contacts
);

export default selectContacts;
