import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import selectContacts, {
  selectLoading,
} from '../store/selectors/contactSelectors';

import ContactItem from './ContactItem';
import Loader from './Loader';
import Modal from './modals/Modal';

import s from './styles/SectionContactList.module.scss';

const SectionContactList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('search') || '';

  const isLoading = useSelector(selectLoading);

  const contacts = useSelector(selectContacts).filter(
    ({ name, surname }) =>
      name.toLowerCase().includes(filter) ||
      surname.toLowerCase().includes(filter)
  );

  const [modal, setModal] = useState({
    type: null,
    data: null,
  });

  return (
    <section className={s.contacts}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.contactList}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              setModal={setModal}
            />
          ))}
        </ul>
      )}
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
