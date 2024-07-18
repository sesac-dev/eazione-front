import { useState, ChangeEvent } from 'react';

const useInput = <T>(initValue: T): [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [values, setValues] = useState<T>(initValue);

  const changer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const init = () => {
    setValues(initValue);
  };

  return [values, changer, init];
};

export default useInput;
