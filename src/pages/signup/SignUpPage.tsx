import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export interface ISignUpState {
  docsType: string;
  setDocsType: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpPage = () => {
  const [docsType, setDocsType] = useState<string>('');

  return (
    <>
      <div className="h-screen w-full max-w-[410px]">
        <Outlet
          context={{
            docsType,
            setDocsType,
          }}
        />
      </div>
    </>
  );
};

export default SignUpPage;
