import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './components/Main';
import Notfound from './components/Notfound';
import ContactPage from './components/ContactPage';

import store from './store/index.js';

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
        .contacts.items.find(({ id }) => params.contactId === id);
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

const App = () => <RouterProvider router={router} />;

export default App;
