import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

import s from './styles/CreatableSelectField.module.scss';

const customStyles = {
  container: (base) => ({
    ...base,
    'marginTop': '8px',
    'minHeight': '44px',
    '@media (min-width: 1500px)': {
      'minHeight': '68px',
      'marginTop': '7px',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 10px',
    '@media (min-width: 1500px)': {
      padding: '0 18px',
    },
  }),
  input: (base) => ({
    ...base,
    'marginTop': 0,
    'marginBottom': 0,
    padding: '0',
  }),
  control: (base) => ({
    ...base,
    'minHeight': '44px',
    'backgroundColor': '#f9f7f4',
    border: '1px solid #f4f0e9',
    'borderRadius': '10px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#f4f0e9',
      border: '1px solid #f4f0e9',
    },
    ':focus-within': {
      'borderColor': '#a6a6a6',
      'boxShadow': 'none',
    },
    ':focus': {
      'borderColor': '#a6a6a6',
      'boxShadow': 'none',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'default',
    },
    ':disabled:hover': {
      'backgroundColor': '#f9f7f4',
      opacity: 0.5,
      cursor: 'default',
    },
    '@media (min-width: 1500px)': {
      'minHeight': '68px',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: '#a6a6a6',
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#f8e6be',
  }),
};

const CreatableSelectField = ({
  options,
  title,
  name,
  placeholder,
  isSubmitting,
}) => {
  const [field, meta, helper] = useField(name);

  return (
    <>
      <label className={s.label} htmlFor={name}>
        {title}
        <CreatableSelect
          isMulti
          options={options}
          styles={customStyles}
          // className={cn('input', {
          //   invalid: meta.error && meta.touched,
          // })}
          dateFormat="dd.MM.yyyy"
          id={name}
          placeholder={placeholder}
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

CreatableSelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
};

CreatableSelectField.defaultProps = {
  isSubmitting: false,
};

export default CreatableSelectField;
