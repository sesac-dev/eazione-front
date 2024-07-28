import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/@common/BottomNavigation';
import Header from '@/components/@common/Header';
import { useEffect } from 'react';

import translationInfo from '@/assets/image/translationInfo.png';
import useSaveImageFile from '@/hooks/@common/useSaveImageFile';

const TranslationPage = () => {
  const navigate = useNavigate();
  const { imgRef, postImg, previewImg, saveImgFiles } = useSaveImageFile();

  useEffect(() => {
    if (postImg && previewImg) {
      navigate('/autocomplete', {
        state: {
          previewImg,
          postImg,
          prev: 'upload',
        },
      });
    }
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
            <img src={translationInfo} className="m-auto h-48 w-64" />
            <div className="flex w-full flex-col gap-5">
              <button
                onClick={() => navigate('/preparing/shooting')}
                className="rounded-lg bg-primary py-4 font-bold text-white"
              >
                문서 촬영 하기
              </button>
              <label
                htmlFor="photo"
                className="h-full w-full rounded-lg bg-primary py-4 text-center font-bold text-white"
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
      <BottomNavigation />
    </>
  );
};

export default TranslationPage;
