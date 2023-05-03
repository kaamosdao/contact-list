import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

import s from './styles/CreatableSelectField.module.scss';

const getCustomStyles = (isInvalid) => ({
  container: (base) => ({
    ...base,
    marginTop: '8px',
    minHeight: '44px',
    '@media (min-width: 1500px)': {
      minHeight: '68px',
      marginTop: '7px',
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
    marginTop: 0,
    marginBottom: 0,
    padding: '0',
  }),
  control: (base, state) => ({
    ...base,
    minHeight: '44px',
    backgroundColor: '#f9f7f4',
    border: '1px solid #f4f0e9',
    borderRadius: '10px',
    outline: isInvalid ? '1px solid #ff3333' : 'none',
    cursor: state.isDisabled ? 'default' : 'pointer',
    opacity: state.isDisabled ? 0.5 : 1,
    boxShadow: 'none',
    ':hover': {
      backgroundColor: state.isDisabled ? '#f9f7f4' : '#f4f0e9',
      border: '1px solid #f4f0e9',
      opacity: state.isDisabled ? 0.5 : 1,
      cursor: state.isDisabled ? 'default' : 'pointer',
    },
    ':focus-within': {
      border: isInvalid ? '1px solid #ff3333' : '1px solid #a6a6a6',
      outline: isInvalid ? '3px solid #ffcccc' : 'none',
    },
    ':focus': {
      border: isInvalid ? '1px solid #ff3333' : '1px solid #a6a6a6',
      outline: isInvalid ? '3px solid #ffcccc' : 'none',
      boxShadow: 'none',
    },
    '@media (min-width: 1500px)': {
      minHeight: '68px',
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
});

const CreatableSelectField = ({
  options,
  title,
  name,
  placeholder,
  isSubmitting,
}) => {
  const [field, meta, helper] = useField(name);

  const getErrorMessage = (error) => {
    if (Array.isArray(error)) {
      const errorMessage = error.filter((item) => item)[0].value;
      return errorMessage;
    }
    return error;
  };

  const isInvalid = meta.error && meta.touched;

  return (
    <>
      <label className={s.label} htmlFor={name}>
        {title}
        <CreatableSelect
          isMulti
          options={options}
          styles={getCustomStyles(isInvalid)}
          id={name}
          placeholder={placeholder}
          onChange={(relation) => helper.setValue(relation)}
          onBlur={() => helper.setTouched(true)}
          selected={field.value}
          isDisabled={isSubmitting}
        />
      </label>
      <div className={s.invalidTooltip}>
        {meta.touched && getErrorMessage(meta.error)}
      </div>
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
