import { createSelector } from '@reduxjs/toolkit';

const selectContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => contacts
);

export const hasContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => !!contacts.length
);

export const selectFilter = createSelector(
  (state) => state.contacts.filter,
  (filter) => filter
);

export default selectContacts;
