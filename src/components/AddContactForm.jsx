import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { addContact } from '../store/slices/contactSlice';

import schema from '../schemas/validationSchema';

import TextField from './TextField';

import s from './styles/AddContactForm.module.scss';

const AddContactForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', surname: '', email: '', phone: '' }}
      validationSchema={schema}
      onSubmit={({ name, surname, email, phone }, actions) => {
        actions.setSubmitting(true);
        dispatch(addContact({ name, surname, email, phone }));
        actions.setSubmitting(false);
        setShowModal(false);
      }}
    >
      {(formik) => (
        <Form className={s.form}>
          <ul className={s.list}>
            <li className={s.item}>
              <TextField
                title="Name"
                name="name"
                type="text"
                placeholder="First name"
                isSubmitting={formik.isSubmitting}
              />
            </li>
            <li className={s.item}>
              <TextField
                title="Surname"
                name="surname"
                type="text"
                placeholder="Last name"
                isSubmitting={formik.isSubmitting}
              />
            </li>
            <li className={s.item}>
              <TextField
                title="Email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                isSubmitting={formik.isSubmitting}
              />
            </li>
            <li className={s.item}>
              <TextField
                title="Phone"
                name="phone"
                type="tel"
                placeholder="+7-999-666-99-66"
                isSubmitting={formik.isSubmitting}
              />
            </li>
          </ul>
          <button
            className={s.buttonAdd}
            type="submit"
            disabled={formik.isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

AddContactForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default AddContactForm;
