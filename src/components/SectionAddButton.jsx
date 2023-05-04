import React, { useState } from 'react';

import modalType, { buttonStyle, buttonType } from '../types/types';

import Modal from './modals/Modal';
import Button from './Button';

import s from './styles/SectionAddButton.module.scss';

const SectionAddButton = () => {
  const [modal, setModal] = useState({
    show: false,
    type: null,
    data: null,
  });

  return (
    <section className={s.addSection}>
      <h2 className="visually-hidden">Add Button</h2>
      <Button
        onClick={() =>
          setModal({
            show: true,
            type: modalType.form,
            data: null,
          })
        }
        style={buttonStyle.add}
        type={buttonType.button}
        title="Add contact"
      />
      {modal.show && (
        <Modal setModal={setModal} type={modal.type} modalData={modal.data} />
      )}
    </section>
  );
};

export default SectionAddButton;
