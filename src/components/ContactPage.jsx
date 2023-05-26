/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

import EmailIcon from '../../assets/img/email.svg';
import PhoneIcon from '../../assets/img/phone.svg';

import s from './styles/ContactPage.module.scss';

const ContactPage = () => {
  const contact = useLoaderData();

  return (
    <div className={s.contactCard}>
      <h2 className="visually-hidden">Contact Card</h2>
      <h3 className={s.name}>
        <span>{contact.name}</span>
        &nbsp;
        <span>{contact.surname}</span>
      </h3>
      <ul className={s.relations}>
        {contact.relations.map(({ value }, i) => (
          <li className={s.relationsItem} key={i}>
            {value}
          </li>
        ))}
      </ul>
      <p className={s.birthday}>birthday:&nbsp;{contact.birthday}</p>
      <p className={s.contactTitle}>Contacts:</p>
      <ul className={s.contacts}>
        <li className={s.emailItem}>
          <EmailIcon className={s.emailSvg} />
          <a href={`mailto:${contact.email}`} className={s.email}>
            {contact.email}
          </a>
        </li>
        <li className={s.phoneItem}>
          <PhoneIcon className={s.phoneSvg} />
          <a
            href={`tel:${contact.phone.split('-').join('')}`}
            className={s.phone}
          >
            {contact.phone}
          </a>
        </li>
      </ul>
      <Link className={s.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default ContactPage;
