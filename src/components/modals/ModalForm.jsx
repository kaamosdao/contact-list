import React from 'react';
import PropTypes from 'prop-types';

import AddContactForm from '../AddContactForm';
import EditContactForm from '../EditContactForm';

import s from './styles/ModalForm.module.scss';

const ModalForm = ({ onClose, contact }) => (
  <div
    className={s.modalForm}
    onClick={(e) => e.stopPropagation()}
    aria-hidden="true"
  >
    <button className={s.buttonClose} type="button" onClick={onClose}>
      <span className="visually-hidden">Close</span>+
    </button>
    {contact ? (
      <EditContactForm closeForm={onClose} contact={contact} />
    ) : (
      <AddContactForm closeForm={onClose} />
    )}
  </div>
);

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    relations: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ).isRequired,
  }),
};

ModalForm.defaultProps = {
  contact: null,
};

export default ModalForm;
