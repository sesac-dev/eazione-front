import { useNavigate } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';

const PreparingShooting = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen w-full">
        <Header left={icons.BACK} left_func={() => navigate(-1)} />
        <div className="h-[calc(100vh-176px)] w-full px-5 pt-12">
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-2 pt-5">
              <h1 className="text-xl font-bold">
                제출 혹은 번역하고자 <br /> 하는 문서를 준비해주세요
              </h1>
              <p className="text-sm text-[#ADADAD]">
                제출하시고자 하는 서류의 정확한 번역 및 안내를 위해
                <br /> 서류 사진이 필요해요.
              </p>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex h-[431px] w-[336px] items-center justify-center bg-[#ECECEC] text-[#BCBCBC]">
                <p>예시 이미지</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/shooting')}
              className="rounded-lg bg-[#ECECEC] py-4 font-bold text-[#808080]"
            >
              문서 촬영 하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreparingShooting;
