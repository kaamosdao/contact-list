import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal, showModal } from '../store/slices/modalSlice';

import modalType from '../types/types';

import s from './ContactItem.module.scss';

const ContactItem = ({ id, name, surname, email, phone }) => {
  const dispatch = useDispatch();

  const handleClickVliew = () => {
    dispatch(
      showModal({
        type: modalType.contact,
        data: { id, name, surname, email, phone },
      })
    );
    dispatch(closeModal());
  };

  return (
    <div className={s.item}>
      <div className={s.name}>
        <span>{name}</span>
        &nbsp;
        <span>{surname}</span>
      </div>
      <button className={s.viewButton} type="button" onClick={handleClickVliew}>
        <span className="visually-hidden">Quick view</span>
        <svg
          className={s.viewIcon}
          width="40px"
          height="40px"
          version="1.1"
          viewBox="0 0 700 560"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m218.37 192.34c-35.148 29.332-59.746 63.805-72.172 83.484-0.82422 1.3047-1.4023 2.2188-1.8867 3.0117-0.31641 0.52344-0.52734 0.88672-0.66797 1.1406v0.027344 0.027344c0.14062 0.25391 0.35156 0.61719 0.66797 1.1406 0.48438 0.79297 1.0625 1.707 1.8867 3.0117 12.426 19.68 37.023 54.152 72.172 83.484 35.09 29.289 79.293 52.336 131.64 52.336s96.551-23.047 131.64-52.336c35.148-29.332 59.742-63.805 72.172-83.484 0.82422-1.3047 1.4023-2.2188 1.8828-3.0117 0.32031-0.52344 0.52734-0.88672 0.67188-1.1406v-0.027344-0.027344c-0.14453-0.25391-0.35156-0.61719-0.67188-1.1406-0.48047-0.79297-1.0586-1.707-1.8828-3.0117-12.43-19.68-37.023-54.152-72.172-83.484-35.09-29.289-79.297-52.336-131.64-52.336s-96.547 23.047-131.64 52.336zm-29.902-35.828c40.332-33.664 94.77-63.176 161.54-63.176 66.773 0 121.21 29.512 161.55 63.176 40.277 33.617 67.891 72.492 81.723 94.391 0.18359 0.29297 0.37109 0.58594 0.5625 0.88672 2.7461 4.3203 6.3086 9.9297 8.1094 17.789 1.4531 6.3438 1.4531 14.508 0 20.852-1.8008 7.8594-5.3633 13.469-8.1094 17.789-0.19141 0.30078-0.37891 0.59375-0.5625 0.88672-13.832 21.898-41.445 60.773-81.723 94.391-40.336 33.664-94.773 63.176-161.55 63.176-66.77 0-121.21-29.512-161.54-63.176-40.281-33.617-67.898-72.492-81.727-94.391-0.18359-0.28906-0.37109-0.58594-0.5625-0.88672-2.7461-4.3203-6.3086-9.9297-8.1094-17.789-1.4531-6.3438-1.4531-14.508 0-20.852 1.8008-7.8594 5.3633-13.469 8.1094-17.789 0.19141-0.30078 0.37891-0.59766 0.5625-0.88672 13.828-21.898 41.445-60.773 81.727-94.391zm161.54 76.824c-25.773 0-46.664 20.895-46.664 46.668s20.891 46.668 46.664 46.668c25.777 0 46.668-20.895 46.668-46.668s-20.891-46.668-46.668-46.668zm-93.332 46.668c0-51.547 41.785-93.332 93.332-93.332 51.547 0 93.336 41.785 93.336 93.332s-41.789 93.332-93.336 93.332c-51.547 0-93.332-41.785-93.332-93.332z" />
        </svg>
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;