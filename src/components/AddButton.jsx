import React from 'react';
import { useDispatch } from 'react-redux';

import { showModal } from '../slices/modalSlice';

import modalType from '../types/types'

import s from './AddButton.module.scss';

const AddButton = () => {
const dispatch = useDispatch();

const handleClick = () => {
  dispatch(showModal({ type: modalType.form }));
}

return (
  <button className={s.button} type="button" onClick={handleClick}>
    Add contact
  </button>
)
} ;

export default AddButton;
