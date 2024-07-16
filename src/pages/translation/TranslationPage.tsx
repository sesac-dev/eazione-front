import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';
import { useEffect, useRef, useState } from 'react';

const TranslationPage = () => {
  const navigate = useNavigate();

  const imgRef = useRef<HTMLInputElement>(null);
  const [postImg, setPostImg] = useState<File>();
  const [previewImg, setPreviewImg] = useState<string>('');

  // 이미지 저장
  const saveImgFiles = () => {
    if (imgRef.current && imgRef.current.files) {
      const file: File = imgRef.current.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const result: string | null = reader.result as string;

        setPreviewImg(result);
        setPostImg(file);
      };
    }
  };

  useEffect(() => {
    console.log(previewImg);
    console.log(postImg);
  }, [postImg, previewImg]);

  return (
    <>
      <div className="h-screen w-full">
        <Header center="자동 문서 번역" />
        <div className="h-[calc(100vh-176px)] w-full px-5 pt-12">
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
              <button
                onClick={() => navigate('/preparing/shooting')}
                className="rounded-lg bg-[#ECECEC] py-4 font-bold text-[#808080]"
              >
                문서 촬영 하기
              </button>
              <label
                htmlFor="photo"
                className="h-full w-full rounded-lg bg-[#ECECEC] py-4 text-center font-bold text-[#808080]"
              >
                <p>문서 업로드 하기</p>
                <input
                  name="photo"
                  onChange={saveImgFiles}
                  ref={imgRef}
                  multiple
                  type="file"
                  accept="image/*"
                  id="photo"
                  className="hidden h-full w-full cursor-pointer"
                ></input>
              </label>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 h-28 w-full max-w-[410px] bg-white pt-3 shadow-top">
        <BottomNavigation />
      </footer>
    </>
  );
};

export default TranslationPage;
