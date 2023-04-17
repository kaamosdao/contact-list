import React from 'react';
import PropTypes from 'prop-types';

import s from './styles/ModalContact.module.scss';

const ModalContact = ({ contact, setShowModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={s.modalContact} onClick={handleClick} aria-hidden="true">
      <button className={s.buttonClose} type="button" onClick={handleClose}>
        <span className="visually-hidden">Close</span>+
      </button>
      <div className={s.contactCard}>
        <div className={s.name}>
          <span>{contact.name}</span>
          &nbsp;
          <span>{contact.surname}</span>
        </div>
        <ul className={s.contacts}>
          <li className={s.email}>
            <span className={s.tag}>email:</span>&nbsp;{contact.email}
          </li>
          <li>
            <span className={s.tag}>phone:</span>&nbsp;{contact.phone}
          </li>
        </ul>
      </div>
    </div>
  );
};

ModalContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalContact;
