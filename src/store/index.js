import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './slices/contactSlice.js';

import localStorageMiddleware from './middlewares/localStorageMiddleware.js';

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});
