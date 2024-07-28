import { useNavigate, useOutletContext } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import { ISignUpState } from './SignUpPage';
import preparingSignup from '@/assets/image/preparingSignup.png';

const PreparingSignUp = () => {
  const navigate = useNavigate();
  const { setDocsType } = useOutletContext<ISignUpState>();

  return (
    <>
      <Header left={icons.BACK} left_func={() => navigate(-1)} />
      <div className="h-full w-full px-5 pt-12">
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-xl font-bold">
              고객님의 실명을 확인할 수 있는 <br /> 신분증을 준비해주세요
            </h1>
            <p className="text-sm text-[#ADADAD]">
              원활한 맞춤 서류 작성을 위해 고객님의 실명을 확인할 수 있는 신분증이 필요해요.
            </p>
          </div>
          <div className="flex w-full justify-center">
            <img src={preparingSignup} />
          </div>
          <div className="flex w-full flex-col gap-5">
            <button
              onClick={() => {
                setDocsType('foreginerfront');
                navigate('/signup/shooting');
              }}
              className="rounded-lg bg-primary py-4 font-bold text-white"
            >
              외국인 등록증
            </button>
            <button
              onClick={() => {
                setDocsType('passport');
                navigate('/signup/shooting');
              }}
              className="rounded-lg bg-primary py-4 font-bold text-white"
            >
              여권
            </button>
          </div>
        </div>
        <div
          onClick={() => navigate('/chat')}
          className="fixed bottom-20 left-0 right-0 m-auto w-full max-w-[410px] text-center text-[#A7A7A7] underline"
        >
          <p>나중에 등록하기</p>
        </div>
      </div>
    </>
  );
};

export default PreparingSignUp;
