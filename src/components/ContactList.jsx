import React from 'react';
import { useSelector } from 'react-redux';

import selectContacts from '../store/selectors/contactSelectors';

import ContactItem from './ContactItem';

import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          surname={contact.surname}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};

export default ContactList;
