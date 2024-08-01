import { useRef, useState } from 'react';

const useSignature = () => {
  const [isPlaceHolder, setIsPlaceHolder] = useState<boolean>(true);
  const signatureRef = useRef(null) as React.MutableRefObject<any>;

  const clearSignatureHandler = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
    setIsPlaceHolder(true);
  };

  const saveSignatureHandler = (): string => {
    if (signatureRef.current) {
      const image = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');
      return image;
    }
    return '';
  };

  const beginSignatureHandler = () => {
    setIsPlaceHolder(false);
  };

  return { isPlaceHolder, signatureRef, clearSignatureHandler, saveSignatureHandler, beginSignatureHandler };
};

export default useSignature;
