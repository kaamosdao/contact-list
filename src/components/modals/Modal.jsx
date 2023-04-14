import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { closeModal } from '../../store/slices/modalSlice';
import selectShow, { selectModal } from '../../store/selectors/modalSelectors';

import ModalForm from './ModalForm';

import s from './Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  form: <ModalForm />,
};

const Modal = () => {
  const dispatch = useDispatch();
  const show = useSelector(selectShow);
  const modal = useSelector(selectModal);

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <div
      className={cn('modal', { show })}
      onClick={handleClick}
      aria-hidden="true"
    >
      {modal && modals[modal.type]}
    </div>
  );
};

export default Modal;
