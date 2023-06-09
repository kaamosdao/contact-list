import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectLoading } from '../store/selectors/contactSelectors';

import modalType, { buttonStyle, buttonType } from '../types/types';

import Modal from './modals/Modal';
import Button from './Button';

import s from './styles/SectionAddButton.module.scss';

const SectionAddButton = () => {
  const isLoading = useSelector(selectLoading);

  const [modal, setModal] = useState({
    type: null,
    data: null,
  });

  return (
    <section className={s.addSection}>
      <h2 className="visually-hidden">Add Button</h2>
      <Button
        onClick={() =>
          setModal({
            type: modalType.form,
            data: null,
          })
        }
        style={buttonStyle.add}
        type={buttonType.button}
        title="Add contact"
        disabled={isLoading}
      />
      {modal.type && (
        <Modal
          onClose={() =>
            setModal({
              type: null,
              data: null,
            })
          }
          type={modal.type}
          modalData={modal.data}
        />
      )}
    </section>
  );
};

export default SectionAddButton;
