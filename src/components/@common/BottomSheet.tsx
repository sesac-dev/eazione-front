import { useState } from 'react';

interface IBottomSheetProps {
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ onClose, children }: IBottomSheetProps) => {
  const [isRendering, setIsRendering] = useState<boolean>(true);

  const handleClose = () => {
    setIsRendering(false);

    setTimeout(() => {
      onClose();
    }, 250);
  };

  return (
    <>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full ${isRendering && 'bg-black/30'}`}
        onClick={handleClose}
      ></div>
      <div
        className={`absolute bottom-0 z-20 w-full rounded-t-[20px] bg-white ${isRendering ? 'animate-sheetOn' : 'animate-sheetOff'}`}
      >
        <div
          className={`w-full`}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
