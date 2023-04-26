import React from 'react';
import PropTypes from 'prop-types';

import AddContactForm from '../AddContactForm';

import s from './styles/ModalForm.module.scss';

const ModalForm = ({ setShowModal }) => (
  <div
    className={s.modalForm}
    onClick={(e) => e.stopPropagation()}
    aria-hidden="true"
  >
    <button
      className={s.buttonClose}
      type="button"
      onClick={() => setShowModal(false)}
    >
      <span className="visually-hidden">Close</span>+
    </button>
    <AddContactForm setShowModal={setShowModal} />
  </div>
);

ModalForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ModalForm;
