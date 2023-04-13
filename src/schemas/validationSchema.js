import * as yup from 'yup';

const phoneRegEx =
  '^([+][0-9]{1,3})([-])([0-9]{3})([-])([0-9]{3})([-])([0-9]{2})([-])([0-9]{2})';

export default yup.object().shape({
  name: yup
    .string()
    .max(20, 'form.errors.name.max')
    .required('form.errors.required'),
  surname: yup
    .string()
    .max(20, 'form.errors.surname.max')
    .required('form.errors.required'),
  email: yup
    .string()
    .email('form.errors.email')
    .required('form.errors.required'),
  phone: yup
    .string()
    .matches(phoneRegEx, { message: 'form.errors.phone' })
    .required('form.errors.required'),
});
