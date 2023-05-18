import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { addContact } from '../store/slices/contactSlice';

import schema from '../schemas/validationSchema';
import { buttonStyle, buttonType } from '../types/types';

import FormFieldsList from './FormFieldsList';
import Button from './Button';

import s from './styles/AddContactForm.module.scss';

const AddContactForm = ({ closeModal }) => {
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
      onSubmit={({ birthday, ...rest }, { setSubmitting }) => {
        setSubmitting(true);
        const formattedBirthday = new Date(birthday).toLocaleDateString('ru');
        dispatch(addContact({ ...rest, birthday: formattedBirthday }));
        setSubmitting(false);
        closeModal();
      }}
    >
      {({ isSubmitting, setFieldValue, handleSubmit }) => (
        <Form className={s.form}>
          <FormFieldsList
            isSubmitting={isSubmitting}
            setFieldValue={setFieldValue}
          />
          <Button
            onClick={handleSubmit}
            style={buttonStyle.submit}
            type={buttonType.submit}
            title="Add contact"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

AddContactForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddContactForm;
