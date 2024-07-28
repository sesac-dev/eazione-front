import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import { ITranslation, translationLanguage } from '@/constants/translationLanguage';
import { useState } from 'react';
import TranslationComboBox from '@/components/translation/TranslationComboBox';

const AutocompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState<ITranslation>(translationLanguage[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      {isModalOpen ? (
        <div className="absolute bottom-0 top-0 z-50 h-full w-full max-w-[410px] bg-black">
          <div onClick={() => setIsModalOpen(false)} className="flex h-12 justify-start px-5 pt-5">
            {icons.CANCEL}
          </div>
          <div className="flex h-full w-full items-center justify-center pb-24">
            <img
              src={location.state.previewImg}
              className={`h-full w-full rounded-lg object-contain ${location.state && location.state.prev === 'shooting' && '-scale-x-100'}`}
            />
          </div>
        </div>
      ) : (
        <div className="h-screen w-full max-w-[410px]">
          <Header left={icons.BACK} left_func={() => navigate(-1)} center="자동 완성" />
          <div className="flex h-full w-full flex-col gap-5 px-5 pt-16">
            <div className="flex items-center justify-between gap-5">
              <TranslationComboBox selected={selected} setSelected={setSelected} />
              <div className="flex flex-col items-center justify-center gap-1 text-sm text-ui_05">
                {icons.SAVE}
                <p>저장하기</p>
              </div>
            </div>
            <div className="h-full w-full rounded-lg border border-[#D6D6D6]">
              <img
                onClick={() => setIsModalOpen(true)}
                src={location.state ? location.state.previewImg : ''}
                className={`h-full w-full rounded-lg object-cover ${location.state && location.state.prev === 'shooting' && '-scale-x-100'}`}
              />
            </div>
            <button className="mb-5 mt-10 w-full rounded-lg bg-primary py-4 font-bold text-white">자동 완성</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AutocompletePage;
