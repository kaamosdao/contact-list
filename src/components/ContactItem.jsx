import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import modalType from '../types/types';

import EditIcon from '../../assets/img/edit.svg';
import ViewIcon from '../../assets/img/view.svg';

import s from './styles/ContactItem.module.scss';

const ContactItem = ({ contact, setModal }) => {
  const navigate = useNavigate();

  return (
    <div
      className={s.item}
      type="button"
      onClick={() => navigate(`/contacts/${contact.id}`)}
      aria-hidden="true"
    >
      <p className={s.name}>
        <span>{contact.name}</span>
        &nbsp;
        <span>{contact.surname}</span>
      </p>
      <button
        className={s.editButton}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setModal({
            type: modalType.form,
            data: contact,
          });
        }}
      >
        <span className="visually-hidden">Edit</span>
        <EditIcon className={s.editIcon} />
      </button>
      <button
        className={s.viewButton}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setModal({
            type: modalType.contact,
            data: contact,
          });
        }}
      >
        <span className="visually-hidden">Quick view</span>
        <ViewIcon className={s.viewIcon} />
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setModal: PropTypes.func.isRequired,
};

export default ContactItem;
