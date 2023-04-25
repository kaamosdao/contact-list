import * as yup from 'yup';

const phoneRegEx =
  '^([+][0-9]{1,3})([-])([0-9]{3})([-])([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})';

export default yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  surname: yup
    .string()
    .trim()
    .max(20, 'Surname must be less than 20 characters')
    .required('Surname is required'),
  email: yup
    .string()
    .email('Incorrect email')
    .max(30, 'Email must be less than 30 characters')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegEx, {
      message: 'Incorrect phone. Correct format: +X-XXX-XXX-XX-XX',
    })
    .required('Phone is required'),
  birthday: yup
    .date()
    .typeError('Must be a date in format DD.MM.YYYY')
    .min(new Date(1900, 0, 1), 'Seems like the person is too old')
    .max(new Date(), "Should not exceed today's date")
    .required('Birthday is required'),
  relations: yup
    .array()
    .of(
      yup.object({
        value: yup
          .string()
          .trim()
          .max(20, 'Relation must be less than 20 characters'),
        label: yup.string(),
      })
    )
    .min(1, 'Relation is required')
    .max(4, 'Must be less than 4 relations')
    .required('Relations are required'),
});
