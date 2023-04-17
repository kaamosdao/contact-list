import React from 'react';

import SectionAddButton from './SectionAddButton';
import SectionContactList from './SectionContactList';

import s from './styles/Main.module.scss';

const Main = () => (
  <main className={s.main}>
    <h1 className={s.title}>Contacts</h1>
    <SectionAddButton />
    <SectionContactList />
  </main>
);

export default Main;
