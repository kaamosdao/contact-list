import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import selectContacts from '../store/selectors/contactSelectors';

import ContactItem from './ContactItem';

import s from './SectionContactList.module.scss';
import Modal from './modals/Modal';
import modalType from '../types/types';

const SectionContactList = () => {
  const contacts = useSelector(selectContacts);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <section className={s.contacts}>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            setShowModal={setShowModal}
            showModal={showModal}
            setModalData={setModalData}
          />
        ))}
      </ul>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          type={modalType.contact}
          modalData={modalData}
        />
      )}
    </section>
  );
};

export default SectionContactList;
