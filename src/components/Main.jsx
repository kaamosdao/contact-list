import React from 'react';

import SectionAddButton from './SectionAddButton';
import ContactList from './ContactList';

import s from './Main.module.scss';

const Main = () => (
  <main className={s.main}>
    <h1 className={s.title}>Contacts</h1>
    <SectionAddButton />
    <section className={s.contacts}>
      <ContactList />
    </section>
  </main>
);

export default Main;
