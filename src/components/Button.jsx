/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import s from './styles/Button.module.scss';

const Button = ({ onClick, type, style, title, disabled }) => (
  <button
    className={s[style]}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {' '}
    {title}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
