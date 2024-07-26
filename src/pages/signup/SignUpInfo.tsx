import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';

const SignUpInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header left={icons.BACK} left_func={() => navigate(-1)} />
      <div className="h-full w-full px-5 pt-12">
        <div className="flex h-full w-full flex-col gap-10">
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-xl font-bold">
              고객님의 정보가 올바르게 <br /> 기입되었는지 한번 더 확인 해주세요.
            </h1>
            <p className="text-sm text-[#ADADAD]">
              인식된 정보를 한번 더 확인해 주세요. 신분증 정보와 다른 경우 다시 촬영하거나 정보를 수정해 주세요.
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SignUpInfo;
