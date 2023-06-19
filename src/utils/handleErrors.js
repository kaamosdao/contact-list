import showToast from './showToast';
import { toastType } from '../types/types';

const handleErrors = (error) => {
  if (error.isServerError) {
    showToast('Server error, try later!', toastType.error);
  } else {
    showToast('Network error, try later!', toastType.error);
  }
};

export default handleErrors;
