import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import s from './styles/TextField.module.scss';

const cn = classnames.bind(s);

const TextField = ({ title, name, type, placeholder, isSubmitting }) => {
  const [field, meta] = useField({ name, type });

  return (
    <>
      <label className={s.label} htmlFor={name}>
        {title}
        <input
          className={cn('input', {
            invalid: meta.error && meta.touched,
          })}
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          disabled={isSubmitting}
        />
      </label>
      <div className={s.invalidTooltip}>{meta.touched && meta.error}</div>
    </>
  );
};

TextField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
};

TextField.defaultProps = {
  isSubmitting: false,
};

export default TextField;
