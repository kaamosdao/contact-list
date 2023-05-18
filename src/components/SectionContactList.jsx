import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import selectContacts from '../store/selectors/contactSelectors';

import ContactItem from './ContactItem';

import Modal from './modals/Modal';

import s from './styles/SectionContactList.module.scss';

const SectionContactList = () => {
  const contacts = useSelector(selectContacts);

  const [modal, setModal] = useState({
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

export default SectionContactList;
