import { useNavigate } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import { ITranslation, translationLanguage } from '@/constants/translationLanguage';
import { useEffect, useState } from 'react';
import TranslationComboBox from '@/components/translation/TranslationComboBox';
import korean_docs from '@/assets/korean_docs.jpg';
import spanish_docs from '@/assets/spanish_docs.png';
import japan_docs from '@/assets/japan_docs.png';
import chinese_docs from '@/assets/chinese_docs.png';
import arabic_docs from '@/assets/arabic_docs.png';
import DocsSaveModal from '@/components/translation/DocsSaveModal';
import Loading from '@/components/@common/Loading';
import arabic_answer from '@/assets/arabic_answer.png';
import { useDocs } from '@/hooks/docs/useDocs';
// import Toast from '@/components/@common/Toast/Toast';

const AutocompletePage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<ITranslation>(translationLanguage[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);
  const [docsImg, setDocsImg] = useState<string>('');
  const { usePostAutoTranslationDocs } = useDocs();
  const { mutate, data, isSuccess } = usePostAutoTranslationDocs();

  useEffect(() => {
    if (selected.id === 1) {
      setDocsImg(korean_docs);
    } else if (selected.id === 2) {
      setDocsImg(korean_docs);
    } else if (selected.id === 3) {
      setDocsImg(japan_docs);
    } else if (selected.id === 4) {
      setDocsImg(chinese_docs);
    } else if (selected.id === 5) {
      setDocsImg(arabic_docs);
    } else if (selected.id === 6) {
      setDocsImg(spanish_docs);
    } else {
      setDocsImg(korean_docs);
    }
    console.log(selected);
  }, [selected]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const autoCompleteHandler = async () => {
    setIsLoading(true);

    const response = await fetch(docsImg);
    const blob = await response.blob();
    const file = new File([blob], `translation.png`, { type: 'image/png' });

    const formData = new FormData();
    formData.append('img', file);

    mutate(formData);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   // setDocsImg(arabic_answer);
    //   // Toast.info('입력하신 파일명으로 저장되었습니다.');
    // }, 5000);
  };

  useEffect(() => {
    if (isSuccess) {
      setDocsImg(data.data);
      setIsLoading(false);
    }
  }, [isSuccess]);

  return (
    <>
      {isModalOpen && (
        <div className="absolute bottom-0 top-0 z-50 h-full w-full max-w-[410px] bg-black">
          <div onClick={() => setIsModalOpen(false)} className="flex h-12 justify-start px-5 pt-5">
            {icons.CANCEL}
          </div>
          <div className="flex h-full w-full items-center justify-center pb-24">
            <img src={docsImg} className={`h-full w-full rounded-lg object-contain`} />
          </div>
        </div>
      )}
      {isLoading && <Loading />}
      {isSaveModalOpen && <DocsSaveModal closeHandler={() => setIsSaveModalOpen(false)} docsImg={docsImg} />}
      <div className="h-screen w-full max-w-[410px]">
        <Header left={icons.BACK} left_func={() => navigate(-1)} center="자동 완성" />
        <div className="flex h-full w-full flex-col gap-5 px-5 pt-16">
          <div className="flex items-center justify-between gap-5">
            <TranslationComboBox selected={selected} setSelected={setSelected} />
            <div
              onClick={() => setIsSaveModalOpen(true)}
              className="flex flex-col items-center justify-center gap-1 text-sm text-ui_01"
            >
              {icons.SAVE}
              <p>저장하기</p>
            </div>
          </div>
          <div className="h-full w-full rounded-lg border border-[#D6D6D6]">
            <img
              onClick={() => setIsModalOpen(true)}
              src={docsImg}
              className={`h-full w-full rounded-lg object-cover`}
            />
          </div>
          <button
            onClick={() => autoCompleteHandler()}
            className="mb-5 mt-10 w-full rounded-lg bg-primary py-4 font-bold text-white"
          >
            자동 완성
          </button>
        </div>
      </div>
    </>
  );
};

export default AutocompletePage;
