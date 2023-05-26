import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import contactReducer from './slices/contactSlice.js';

import localStorageMiddleware from './middlewares/localStorageMiddleware.js';
import contacWatcher from './sagas/contactSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      localStorageMiddleware.middleware,
      sagaMiddleware
    ),
});

sagaMiddleware.run(contacWatcher);
