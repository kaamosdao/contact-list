import { createSelector } from '@reduxjs/toolkit';

const selectShow = createSelector(
  (state) => state.modals.show,
  (show) => show
);

export const selectModal = createSelector(
  (state) => state.modals.type,
  (modal) => modal
);

export default selectShow;
