import { ReactNode } from 'react';

import disable_chat from '@/assets/icons/disable_chat.png';
import disable_doc from '@/assets/icons/disable_doc.png';
import disable_my from '@/assets/icons/disable_my.png';
import disable_check from '@/assets/icons/disable_check.png';
import enable_chat from '@/assets/icons/enable_chat.png';
import enable_doc from '@/assets/icons/enable_doc.png';
import enable_my from '@/assets/icons/enable_my.png';
import enable_check from '@/assets/icons/enable_check.png';

import mic from '@/assets/icons/mic.png';
import docs_camera from '@/assets/icons/docs_camera.png';
import text_camera from '@/assets/icons/text_camera.png';
import notification from '@/assets/icons/notification.png';
import bottom from '@/assets/icons/bottomArrow.png';
import send from '@/assets/icons/send.png';
import save from '@/assets/icons/save.png';
import calendar from '@/assets/icons/calendar.png';

export const icons: { [key: string]: ReactNode } = {
  DISABLE_CHAT: <img src={disable_chat} />,
  DISABLE_DOC: <img src={disable_doc} />,
  DISABLE_MY: <img src={disable_my} />,
  DISABLE_CHECK: <img src={disable_check} />,
  ENABLE_CHAT: <img src={enable_chat} />,
  ENABLE_DOC: <img src={enable_doc} />,
  ENABLE_MY: <img src={enable_my} />,
  ENABLE_CHECK: <img src={enable_check} />,

  MIC: <img src={mic} />,
  DOCS_CAMERA: <img src={docs_camera}></img>,
  TEXT_CAMERA: <img src={text_camera}></img>,
  NOTIFICATION: <img src={notification}></img>,
  BOTTOM: <img src={bottom}></img>,
  SEND: <img src={send}></img>,
  SAVE: <img src={save}></img>,
  CALENDAR: <img src={calendar}></img>,

  BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
      <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
  ),
  RIGHT: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#858585" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
    </svg>
  ),
  MY_RIGHT: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#333333" viewBox="0 0 256 256">
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
    </svg>
  ),
  WHITE_BACK: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fafafa" viewBox="0 0 256 256">
      <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
    </svg>
  ),
  CANCEL: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFFFFF" viewBox="0 0 256 256">
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
    </svg>
  ),
  BLACK_CANCEL: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
    </svg>
  ),
};
