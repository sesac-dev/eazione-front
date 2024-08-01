import { useState } from 'react';

interface IModalProps {
  width: string;
  bottom: string;
  onClose?: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
}

const Modal = ({ width, bottom, onClose, children, backgroundColor = 'bg-black/60' }: IModalProps) => {
  const [isRendering, setIsRendering] = useState<boolean>(true);

  const handleClose = () => {
    onClose && setIsRendering(false);

    setTimeout(() => {
      onClose && onClose();
    }, 250);
  };

  return (
    <>
      <div
        className={`absolute bottom-0 top-0 h-full w-full max-w-[410px] ${backgroundColor} z-20`}
        onClick={handleClose}
      ></div>
      <div
        className={`absolute left-1/2 z-20 max-w-[410px] -translate-x-1/2 ${bottom} ${width} ${isRendering ? 'animate-modalOpen' : 'animate-modalClose'} `}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
