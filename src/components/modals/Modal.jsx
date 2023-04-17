import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ModalForm from './ModalForm';
import ModalContact from './ModalContact';

import s from './Modal.module.scss';

const cn = classNames.bind(s);

const modals = {
  form: (setShowModal) => <ModalForm setShowModal={setShowModal} />,
  contact: (setShowModal, modalData) => (
    <ModalContact setShowModal={setShowModal} contact={modalData} />
  ),
};

const Modal = ({ setShowModal, type, modalData }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className={cn('modal')} onClick={handleClick} aria-hidden="true">
      {modals[type](setShowModal, modalData)}
    </div>
  );
};

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
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
