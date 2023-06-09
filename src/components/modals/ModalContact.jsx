/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import s from './styles/ModalContact.module.scss';

const ModalContact = ({ contact, onClose }) => (
  <div
    className={s.modalContact}
    onClick={(e) => e.stopPropagation()}
    aria-hidden="true"
  >
    <h2 className="visually-hidden">Contact Card</h2>
    <button className={s.buttonClose} type="button" onClick={onClose}>
      <span className="visually-hidden">Close</span>+
    </button>
    <div className={s.contactCard}>
      <h3 className={s.name}>
        <span>{contact.name}</span>
        &nbsp;
        <span>{contact.surname}</span>
      </h3>
      <ul className={s.relations}>
        {contact.relations.map(({ value }, i) => (
          <li className={s.relationsItem} key={i}>
            {value}
          </li>
        ))}
      </ul>
      <p className={s.birthday}>
        <span className={s.birthTag}>birthday:</span>&nbsp;{contact.birthday}
      </p>
      <hr className={s.separator} />
      <p className={s.contactTitle}>Contacts:</p>
      <ul className={s.contacts}>
        <li>
          <p className={s.email}>
            <span className={s.tag}>email:</span>&nbsp;{contact.email}
          </p>
        </li>
        <li>
          <p className={s.phone}>
            <span className={s.tag}>phone:</span>&nbsp;{contact.phone}
          </p>
        </li>
      </ul>
    </div>
  </div>
);

ModalContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalContact;
