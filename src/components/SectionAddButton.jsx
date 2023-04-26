import React, { useState } from 'react';

import modalType from '../types/types';

import Modal from './modals/Modal';

import s from './styles/SectionAddButton.module.scss';

const SectionAddButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={s.addSection}>
      <h2 className="visually-hidden">Add Button</h2>
      <button
        className={s.button}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add contact
      </button>
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
