import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ModalForm from './ModalForm';
import ModalContact from './ModalContact';

import s from './styles/Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  form: (onClose, modalData = null) => (
    <ModalForm onClose={onClose} contact={modalData} />
  ),
  contact: (onClose, modalData) => (
    <ModalContact onClose={onClose} contact={modalData} />
  ),
};

const Modal = ({ onClose, type, modalData }) =>
  createPortal(
    <div className={cn('modal')} onClick={onClose} aria-hidden="true">
      {modals[type](onClose, modalData)}
    </div>,
    document.body
  );

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  modalData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

Modal.defaultProps = {
  modalData: null,
};

export default Modal;
