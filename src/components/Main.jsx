import React from 'react';
import { ToastContainer } from 'react-toastify';

import SectionAddButton from './SectionAddButton';
import SectionFilter from './SectionFitler';
import SectionContactList from './SectionContactList';

import s from './styles/Main.module.scss';

const Main = () => (
  <main className={s.main}>
    <h1 className={s.title}>Contacts</h1>
    <SectionAddButton />
    <SectionFilter />
    <SectionContactList />
    <ToastContainer />
  </main>
);

export default Main;
