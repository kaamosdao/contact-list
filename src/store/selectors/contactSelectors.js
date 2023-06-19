import { createSelector } from '@reduxjs/toolkit';

const selectContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => contacts
);

export const hasContacts = createSelector(
  (state) => state.contacts.items,
  (contacts) => !!contacts.length
);

export const selectLoading = createSelector(
  (state) => state.contacts.loading,
  (loading) => loading
);

export default selectContacts;
