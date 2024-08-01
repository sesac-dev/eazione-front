import { ToastContainer } from 'react-toastify';

const ToastContext = () => {
  return (
    <ToastContainer
      position="bottom-center" // 알람 위치 지정
      hideProgressBar={false} // 진행시간바 숨김
      rtl={false} // 알림 좌우 반전
    />
  );
};

export default ToastContext;
