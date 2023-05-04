import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ModalForm from './ModalForm';
import ModalContact from './ModalContact';

import s from './styles/Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  form: (setModal, modalData = null) => (
    <ModalForm setModal={setModal} contact={modalData} />
  ),
  contact: (setModal, modalData) => (
    <ModalContact setModal={setModal} contact={modalData} />
  ),
};

const Modal = ({ setModal, type, modalData }) =>
  createPortal(
    <div
      className={cn('modal')}
      onClick={() =>
        setModal({
          show: false,
          type: null,
          data: null,
        })
      }
      aria-hidden="true"
    >
      {modals[type](setModal, modalData)}
    </div>,
    document.body
  );

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  modalData: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
