import { dataURLtoFile } from '@/utils/dataURLtoFile';
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

  const saveSignatureHandler = () => {
    if (signatureRef.current) {
      const image = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');

      console.log(image);
      return dataURLtoFile(image, 'signature');
    }
  };

  const beginSignatureHandler = () => {
    setIsPlaceHolder(false);
  };

  return { isPlaceHolder, signatureRef, clearSignatureHandler, saveSignatureHandler, beginSignatureHandler };
};

export default useSignature;
