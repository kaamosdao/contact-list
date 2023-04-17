import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ModalForm from './ModalForm';

import s from './Modal.module.scss';

const cn = classNames.bind(s);

const Modal = ({ showModal, setShowModal, type }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  const modals = {
    form: <ModalForm setShowModal={setShowModal} />,
  };

  return (
    <div
      className={cn('modal', { show: showModal })}
      onClick={handleClick}
      aria-hidden="true"
    >
      {modals[type]}
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Modal;
