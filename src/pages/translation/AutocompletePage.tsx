import { useNavigate } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';
import { ITranslation, translationLanguage } from '../../constants/translationLanguage';
import { useState } from 'react';
import TranslationComboBox from '../../components/translation/TranslationComboBox';

import sample from '@/assets/sample.jpg';

const AutocompletePage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<ITranslation>(translationLanguage[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <div className="absolute bottom-0 top-0 z-50 h-full w-full max-w-[410px] bg-black">
          <div onClick={() => setIsModalOpen(false)} className="z-50 flex h-12 justify-end pr-5 pt-5">
            {icons.CANCEL}
          </div>
          <div className="h-full w-full py-16 pb-28">
            <img src={sample} className="h-full w-full object-cover" />
          </div>
        </div>
      ) : (
        <div className="h-screen w-full max-w-[410px]">
          <Header left={icons.BACK} left_func={() => navigate(-1)} center="자동 완성" />
          <div className="flex h-full w-full flex-col gap-5 px-5 pt-16">
            <div className="flex items-center justify-between gap-5">
              <TranslationComboBox selected={selected} setSelected={setSelected} />
              <div className="flex flex-col items-center justify-center text-sm">
                {icons.DISABLE_DOC}
                <p>보관함에 저장</p>
              </div>
            </div>
            <div className="h-full w-full rounded-lg border border-[#D6D6D6]">
              <img onClick={() => setIsModalOpen(true)} src={sample} className="h-full w-full object-contain" />
            </div>
            <button
              // onClick={() => navigate('/shooting')}
              className="mb-5 mt-10 w-full rounded-lg bg-primary py-4 font-bold text-white"
            >
              자동 완성
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AutocompletePage;
