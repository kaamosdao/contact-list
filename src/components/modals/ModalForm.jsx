import React from 'react';

import s from './ModalForm.module.scss';

const ModalForm = () => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={s.modalForm} onClick={handleClick} aria-hidden="true">
      Form
    </div>
  );
};

export default ModalForm;
