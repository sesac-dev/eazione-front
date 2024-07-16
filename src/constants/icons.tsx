import { ReactNode } from 'react';

import mic from '@/assets/icons/mic.png';
import camera from '@/assets/icons/camera.png';
import notification from '@/assets/icons/notification.png';

export const icons: { [key: string]: ReactNode } = {
  BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
      <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
  ),
  WHITE_BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fafafa" viewBox="0 0 256 256">
      <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
  ),
  CANCEL: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
    </svg>
  ),
  MIC: <img src={mic} className="h-[19px] w-[14px]" />,
  CAMERA: <img src={camera} className="h-6 w-6"></img>,
  NOTIFICATION: <img src={notification} className="h-6 w-6"></img>,
};
