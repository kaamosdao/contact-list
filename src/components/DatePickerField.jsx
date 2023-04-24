import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DatePicker from 'react-datepicker';

import s from './styles/TextField.module.scss';

const cn = classnames.bind(s);

const DatePickerField = ({ title, name, type, placeholder, isSubmitting }) => {
  const [field, meta, helper] = useField({ name, type });

  return (
    <>
      <label className={s.label} htmlFor={name}>
        {title}
        <DatePicker
          className={cn('input', {
            invalid: meta.error && meta.touched,
          })}
          dateFormat="dd.MM.yyyy"
          id={name}
          placeholderText={placeholder}
          onChange={(date) => helper.setValue(date)}
          onBlur={field.onBlur}
          selected={field.value}
          disabled={isSubmitting}
        />
      </label>
      <div className={s.invalidTooltip}>{meta.touched && meta.error}</div>
    </>
  );
};

DatePickerField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
};

DatePickerField.defaultProps = {
  isSubmitting: false,
};

export default DatePickerField;
