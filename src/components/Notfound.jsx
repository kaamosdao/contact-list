import React from 'react';

import s from './styles/Notfound.module.scss';

function Notfound() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Page Not Found</h1>
      <img
        className={s.travolta}
        width="154"
        height="148.4"
        src="/assets/img/travolta-not-found.gif"
        alt="Page Not Found"
      />
    </div>
  );
}

export default Notfound;
