import * as yup from 'yup';

const phoneRegEx =
  '^([+][0-9]{1,3})([-])([0-9]{3})([-])([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})';

export default yup.object().shape({
  name: yup
    .string()
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  surname: yup
    .string()
    .max(20, 'Surname must be less than 20 characters')
    .required('Surname is required'),
  email: yup.string().email('Incorrect email').required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegEx, {
      message: 'Incorrect phone. Correct format: +X-XXX-XXX-XX-XX',
    })
    .required('Phone is required'),
});
