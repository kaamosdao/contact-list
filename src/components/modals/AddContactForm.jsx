/* eslint-disable no-octal-escape */
import React from 'react';
import { useFormik } from 'formik';
import classnames from 'classnames/bind';

import schema from '../../schemas/validationSchema';

import s from './AddContactForm.module.scss';

const cn = classnames.bind(s);

const AddContactForm = () => {
  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '', phone: '' },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(false);
      // console.log(
      //   JSON.stringify({
      //     name: values.name,
      //     surname: values.surname,
      //     email: values.email,
      //     phone: values.phone,
      //   })
      // );
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <legend className="visually-hidden">Заполните поля</legend>
      <ul className={s.list}>
        <li className={s.item}>
          <label className={s.label} htmlFor="name">
            Name
            <input
              className={cn('input', {
                invalid: formik.errors.name && formik.touched.name,
              })}
              type="text"
              name="name"
              id="name"
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              disabled={formik.isSubmitting}
              required
            />
          </label>
          <div className={s.invalidTooltip}>
            {formik.touched.name && formik.errors.name}
          </div>
        </li>
        <li className={s.item}>
          <label className={s.label} htmlFor="surname">
            Surname
            <input
              className={cn('input', {
                invalid: formik.errors.surname && formik.touched.surname,
              })}
              type="text"
              name="surname"
              id="surname"
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              disabled={formik.isSubmitting}
              required
            />
          </label>
          <div className={s.invalidTooltip}>
            {formik.touched.surname && formik.errors.surname}
          </div>
        </li>
        <li className={s.item}>
          <label className={s.label} htmlFor="email">
            Email
            <input
              className={cn('input', {
                invalid: formik.errors.email && formik.touched.email,
              })}
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={formik.isSubmitting}
              required
            />
          </label>
          <div className={s.invalidTooltip}>
            {formik.touched.email && formik.errors.email}
          </div>
        </li>
        <li className={s.item}>
          <label className={s.label} htmlFor="phone">
            Phone
            <input
              className={cn('input', {
                invalid: formik.errors.phone && formik.touched.phone,
              })}
              type="tel"
              name="phone"
              id="phone"
              placeholder="+7-999-666-99-66"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              disabled={formik.isSubmitting}
              required
            />
          </label>
          <div className={s.invalidTooltip}>
            {formik.touched.phone && formik.errors.phone}
          </div>
        </li>
      </ul>
      <button className={s.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default AddContactForm;
