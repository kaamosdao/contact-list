import React from 'react';
import PropTypes from 'prop-types';

import s from './styles/ModalContact.module.scss';

const ModalContact = ({ contact, setShowModal }) => {
  const birthDay = new Date(contact.birthday).toLocaleDateString('ru');
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={s.modalContact} onClick={handleClick} aria-hidden="true">
      <h2 className="visually-hidden">Contact Card</h2>
      <button className={s.buttonClose} type="button" onClick={handleClose}>
        <span className="visually-hidden">Close</span>+
      </button>
      <div className={s.contactCard}>
        <div className={s.name}>
          <span>{contact.name}</span>
          &nbsp;
          <span>{contact.surname}</span>
        </div>
        <ul className={s.relations}>
          {contact.relations.map(({ value, id }) => (
            <li className={s.relationsItem} key={id}>
              {value}
            </li>
          ))}
        </ul>
        <div className={s.birthday}>
          <span className={s.birthTag}>birthday:</span>&nbsp;{birthDay}
        </div>
        <hr className={s.separator} />
        <h3 className={s.contactTitle}>Contacts:</h3>
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
    birthday: PropTypes.string.isRequired,
    relations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalContact;
