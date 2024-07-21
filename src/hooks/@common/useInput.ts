import { useState, ChangeEvent } from 'react';

const useInput = <T>(
  initValue: T,
): [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void, (text: string) => void] => {
  const [values, setValues] = useState<T>(initValue);

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

  return [values, changer, init, sttChanger];
};

export default useInput;
