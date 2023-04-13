/* eslint-disable no-octal-escape */
import React from 'react';

import s from './AddContactForm.module.scss';

const AddContactForm = () => (
  <form className={s.form}>
    <legend className="visually-hidden">Заполните поля</legend>
    <ul className={s.list}>
      <li className={s.item}>
        <label className={s.label} htmlFor="name">
          Имя
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
            required
          />
        </label>
      </li>
      <li className={s.item}>
        <label className={s.label} htmlFor="surName">
          Имя
          <input
            className={s.input}
            type="text"
            name="surName"
            id="surName"
            placeholder="Введите фамилию"
            required
          />
        </label>
      </li>
      <li className={s.item}>
        <label className={s.label} htmlFor="email">
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
        </label>
      </li>
      <li className={s.item}>
        <label className={s.label} htmlFor="phone">
          Телефон
          <input
            className={s.input}
            type="tel"
            name="phone"
            id="phone"
            placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            pattern="^([+]7)\s(\([0-9]{3})\)([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})"
            required
          />
        </label>
      </li>
    </ul>
    <button className={s.buttonAdd} type="submit">
      Add contact
    </button>
  </form>
);

export default AddContactForm;
