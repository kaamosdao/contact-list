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
    errorElement: <Notfound />,
  },
  {
    path: 'contacts/:contactIndex',
    loader: ({ params }) => {
      const contact = store.getState().contacts.items[params.contactIndex - 1];
      return contact;
    },
    element: <ContactPage />,
    errorElement: <Notfound />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
