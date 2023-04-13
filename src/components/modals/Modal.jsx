import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import selectShow, { selectModal } from '../../slices/modalSelectors';

import ModalForm from './ModalForm';

import s from './Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  form: <ModalForm />,
};

const Modal = () => {
  const show = useSelector(selectShow);
  const modal = useSelector(selectModal);
  return (
    <div className={cn('modal', { show })}>{modal && modals[modal.type]}</div>
  );
};

export default Modal;
