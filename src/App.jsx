import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from './store/index.js';
import { getContacts } from './store/slices/contactSlice';

import Main from './components/Main';
import Notfound from './components/Notfound';
import ContactPage from './components/ContactPage';

import LocalStorageData from './utils/localStorageData';

const localStorageTodo = new LocalStorageData('contactList');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'contacts/:contactId',
    loader: ({ params }) => {
      const contact = store
        .getState()
        .contacts.items.find(({ id }) => params.contactId === String(id));
      return contact;
    },
    element: <ContactPage />,
    errorElement: <Notfound />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorageTodo.hasData()) {
      return;
    }

    dispatch(getContacts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
