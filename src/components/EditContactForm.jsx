import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { updateContact, deleteContact } from '../store/slices/contactSlice';

import schema from '../schemas/validationSchema';
import { buttonStyle, buttonType } from '../types/types';

import FormFieldsList from './FormFieldsList';
import Button from './Button';

import s from './styles/EditContactForm.module.scss';

const EditContactForm = ({ closeModal, contact }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: contact.name,
        surname: contact.surname,
        email: contact.email,
        phone: contact.phone,
        birthday: new Date(contact.birthday.split('.').reverse().join('-')),
        relations: contact.relations,
      }}
      validationSchema={schema}
      onSubmit={({ birthday, ...rest }, { setSubmitting }) => {
        setSubmitting(true);
        const formattedBirthday = new Date(birthday).toLocaleDateString('ru');
        dispatch(
          updateContact({
            id: contact.id,
            ...rest,
            birthday: formattedBirthday,
          })
        );
        setSubmitting(false);
        closeModal();
      }}
    >
      {({ isSubmitting, setSubmitting, setFieldValue, handleSubmit }) => (
        <Form className={s.form}>
          <FormFieldsList
            isSubmitting={isSubmitting}
            setFieldValue={setFieldValue}
          />
          <div className={s.buttons}>
            <Button
              onClick={handleSubmit}
              style={buttonStyle.submit}
              type={buttonType.submit}
              title="Save contact"
              disabled={isSubmitting}
            />
            <Button
              onClick={() => {
                setSubmitting(true);
                dispatch(deleteContact({ id: contact.id }));
                setSubmitting(false);
                closeModal();
              }}
              style={buttonStyle.delete}
              type={buttonType.button}
              title="Delete contact"
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

EditContactForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    relations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default EditContactForm;
