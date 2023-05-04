/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IMaskMixin } from 'react-imask';

import TextField from './TextField';

const MaskedTextField = IMaskMixin(({ inputRef, ...props }) => (
  <TextField innerRef={inputRef} {...props} />
));

export default MaskedTextField;
