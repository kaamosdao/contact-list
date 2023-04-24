import React from 'react';
import PropTypes from 'prop-types';

import AddContactForm from '../AddContactForm';

import s from './styles/ModalForm.module.scss';

const ModalForm = ({ setShowModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={s.modalForm} onClick={handleClick} aria-hidden="true">
      <button className={s.buttonClose} type="button" onClick={handleClose}>
        <span className="visually-hidden">Close</span>+
      </button>
      <AddContactForm setShowModal={setShowModal} />
    </div>
  );
};

ModalForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ModalForm;
