import { useState, ChangeEvent, useEffect } from 'react';
import { useUser } from '../user/useUser';

const useInput = <T>(
  initValue: T,
  isMutate?: boolean,
  docsType?: string,
): [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void, (text: string) => void] => {
  const [values, setValues] = useState<T>(initValue);
  const { useGetUserDocs } = useUser();
  const { mutate: passportMutate, data: passportData, isSuccess: passportSuccess } = useGetUserDocs('passport');
  const { mutate: idCardMutate, data: idCardData, isSuccess: idCardSuccess } = useGetUserDocs('IdCard');

  const changer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const init = () => {
    setValues(initValue);
  };

  const sttChanger = (text: string) => {
    setValues({ ...values, ['chat']: text });
  };

  useEffect(() => {
    if (isMutate) {
      if (docsType === 'passport') {
        passportMutate();
      } else {
        idCardMutate();
      }
    }
  }, [isMutate]);

  useEffect(() => {
    if (passportData) {
      setValues(passportData.data as T);
    }
  }, [passportSuccess]);

  useEffect(() => {
    if (idCardData) {
      setValues(idCardData.data as T);
    }
  }, [idCardSuccess]);

  return [values, changer, init, sttChanger];
};

export default useInput;
