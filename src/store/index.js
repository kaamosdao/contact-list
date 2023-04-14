import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './slices/modalSlice.js';
import contactReducer from './slices/contactSlice.js';

import localStorageMiddleware from './middlewares/localStorageMiddleware.js';

export default configureStore({
  reducer: {
    modals: modalReducer,
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});
