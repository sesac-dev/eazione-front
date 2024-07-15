import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';

const TranslationPage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="h-[calc(100vh-176px)] w-full px-5">
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-2 py-5">
              <h1 className="text-xl font-bold">
                원하는 문서를 <br /> 스캔하고, 번역할 수 있어요
              </h1>
              <p className="text-sm text-[#ADADAD]">
                작성하고자 하는 문서를 자동으로 번역하고
                <br /> 입력 예시 문항을 표기해 줍니다.
              </p>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex h-36 w-44 items-center justify-center bg-[#ECECEC] text-[#BCBCBC]">
                <p>예시 이미지</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-5">
              <button className="rounded-lg bg-[#ECECEC] py-4 font-bold text-[#808080]">문서 촬영 하기</button>
              <button className="rounded-lg bg-[#ECECEC] py-4 font-bold text-[#808080]">문서 업로드 하기</button>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default TranslationPage;
