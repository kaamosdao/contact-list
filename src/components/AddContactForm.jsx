import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { addContact } from '../store/slices/contactSlice';

import schema from '../schemas/validationSchema';

import TextField from './TextField';
import DatePickerField from './DatePickerField';
import CreatableSelectField from './CreatableSelectField';
import MaskedTextField from './MaskedTextField';

import s from './styles/AddContactForm.module.scss';

const relationOptions = [
  { value: 'Friend', label: 'Friend' },
  { value: 'Family', label: 'Family' },
  { value: 'Acquaintance', label: 'Acquaintance' },
  { value: 'Co-worker', label: 'Co-worker' },
];

const AddContactForm = ({ setShowModal }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone: '',
        birthday: '',
        relations: [],
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        const birthday = new Date(values.birthday).toLocaleDateString('ru');
        dispatch(addContact({ ...values, birthday }));
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
              <MaskedTextField
                mask="+{7}-000-000-00-00"
                title="Phone"
                name="phone"
                type="tel"
                placeholder="+7-999-666-99-66"
                isSubmitting={formik.isSubmitting}
                onAccept={(value) => formik.setFieldValue('phone', value)}
              />
            </li>
            <li className={s.item}>
              <DatePickerField
                title="Birthday"
                name="birthday"
                type="date"
                placeholder="dd.mm.yyyy"
                isSubmitting={formik.isSubmitting}
              />
            </li>
            <li className={s.item}>
              <CreatableSelectField
                options={relationOptions}
                title="Relations"
                name="relations"
                placeholder="Add your relations"
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
