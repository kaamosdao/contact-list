import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import { addContact } from '../slices/contactSlice';

import LocalStorageData from '../../utils/localStorageData';

const localStorageTodo = new LocalStorageData('contactList');
const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(addContact),
  effect: async (_, listenerApi) => {
    const { items } = listenerApi.getState().contacts;
    localStorageTodo.setData({ contacts: items });
  },
});

export default localStorageMiddleware;