import { toast } from 'react-toastify';
import { toastType } from '../types/types';

const optionst = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const showToast = (notification, type = toastType.default) =>
  type === toastType.default
    ? toast(notification, optionst)
    : toast[type](notification, optionst);

export default showToast;
