import { ReactNode } from 'react';
import { Flip, ToastOptions, toast } from 'react-toastify';
import './toast.css';

const defaultToastOption: ToastOptions = {
  autoClose: 1000,
  hideProgressBar: true,
  pauseOnHover: false,
  closeButton: false,
  delay: 500,
  closeOnClick: true,
  transition: Flip,
};

const Toast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, { ...defaultToastOption, icon: false, ...options });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, { ...defaultToastOption, icon: false, ...options });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, { ...defaultToastOption, icon: false, ...options });
  },
};

export default Toast;
