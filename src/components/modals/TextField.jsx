import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import s from './styles/TextField.module.scss';

const cn = classnames.bind(s);

const TextField = ({ title, name, type, placeholder, formik }) => (
  <>
    <label className={s.label} htmlFor={name}>
      {title}
      <input
        className={cn('input', {
          invalid: formik.errors[name] && formik.touched[name],
        })}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        disabled={formik.isSubmitting}
      />
    </label>
    <div className={s.invalidTooltip}>
      {formik.touched[name] && formik.errors[name]}
    </div>
  </>
);

TextField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  formik: PropTypes.shape({
    errors: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    touched: PropTypes.shape({
      name: PropTypes.bool,
      surname: PropTypes.bool,
      email: PropTypes.bool,
      phone: PropTypes.bool,
    }).isRequired,
    values: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TextField;
