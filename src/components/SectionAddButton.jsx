import React, { useState } from 'react';

import modalType, { buttonStyle, buttonType } from '../types/types';

import Modal from './modals/Modal';
import Button from './Button';

import s from './styles/SectionAddButton.module.scss';

const SectionAddButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={s.addSection}>
      <h2 className="visually-hidden">Add Button</h2>
      <Button
        onClick={() => setShowModal(true)}
        style={buttonStyle.add}
        type={buttonType.button}
        title="Add contact"
      />
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          type={modalType.form}
        />
      )}
    </section>
  );
};

export default SectionAddButton;
