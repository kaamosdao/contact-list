import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../store/slices/modalSlice';

import AddContactForm from './AddContactForm';

import s from './ModalForm.module.scss';

const ModalForm = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={s.modalForm} onClick={handleClick} aria-hidden="true">
      <button className={s.buttonClose} type="button" onClick={handleClose}>
        <span className="visually-hidden">Close</span>+
      </button>
      <AddContactForm />
    </div>
  );
};

export default ModalForm;
