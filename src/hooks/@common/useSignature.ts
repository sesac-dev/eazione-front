import { dataURLtoFile } from '@/utils/dataURLtoFile';
import { useRef } from 'react';

const useSignature = () => {
  const signatureRef = useRef(null) as React.MutableRefObject<any>;

  const clearSignatureHandler = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  const saveSignatureHandler = () => {
    if (signatureRef.current) {
      const image = signatureRef.current.getTrimmedCanvas().toDataURL('image/png');

      console.log(image);
      return dataURLtoFile(image);
    }
  };

  return { signatureRef, clearSignatureHandler, saveSignatureHandler };
};

export default useSignature;
