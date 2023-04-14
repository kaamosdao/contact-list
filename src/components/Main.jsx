import React from 'react';

import AddButton from './AddButton';
import ContactList from './ContactList';

import s from './Main.module.scss';

const Main = () => (
  <main className={s.main}>
    <h1 className={s.title}>Contacts</h1>
    <section className={s.addSection}>
      <h2 className="visually-hidden">Add Button</h2>
      <AddButton />
    </section>
    <section className={s.contacts}>
      <ContactList />
    </section>
  </main>
);

export default Main;
