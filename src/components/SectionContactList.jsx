import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import selectContacts from '../store/selectors/contactSelectors';

import ContactItem from './ContactItem';

import Modal from './modals/Modal';

import s from './styles/SectionContactList.module.scss';

const SectionContactList = () => {
  const contacts = useSelector(selectContacts);

  const [modal, setModal] = useState({
    show: false,
    type: null,
    data: null,
  });

  return (
    <section className={s.contacts}>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} setModal={setModal} />
        ))}
      </ul>
      {modal.show && (
        <Modal setModal={setModal} type={modal.type} modalData={modal.data} />
      )}
    </section>
  );
};

export default SectionContactList;
