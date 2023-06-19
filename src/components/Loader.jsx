import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import s from './styles/Loader.module.scss';

const Loader = () => (
  <div className={s.loader}>
    <BeatLoader color="#286562" aria-label="Loading Spinner" />
  </div>
);

export default Loader;
