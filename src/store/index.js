import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './slices/modalSlice.js';
import contactReducer from './slices/contactSlice.js';

export default configureStore({
  reducer: {
    modals: modalReducer,
    contacts: contactReducer,
  },
});
