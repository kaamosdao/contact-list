/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  modal: null,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.show = true;
      state.modal = payload;
    },
    closeModal: (state) => {
      state.show = false;
      state.modal = null;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
