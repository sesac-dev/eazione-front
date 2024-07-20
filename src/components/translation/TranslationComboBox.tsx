import { useState } from 'react';
import { icons } from '../../constants/icons';
import { ITranslation, translationLanguage } from '../../constants/translationLanguage';

interface ITranslationProps {
  selected: ITranslation;
  setSelected: React.Dispatch<React.SetStateAction<ITranslation>>;
}

const TranslationComboBox = ({ selected, setSelected }: ITranslationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-52 text-sm">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 items-center justify-between rounded-lg border border-[#E1E1E1] px-3"
      >
        <p className="text-[#9D9D9D]">{selected.language}</p>
        <div>{icons.BOTTOM}</div>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-52 rounded-lg">
          {translationLanguage
            .filter(v => v.id !== 0)
            .map(value => {
              return (
                <div
                  key={value.id}
                  onClick={() => {
                    setSelected(translationLanguage[value.id]);
                    setIsOpen(false);
                  }}
                  className={`flex h-12 items-center bg-[#F2F2F2] pl-3 ${value.id === 1 && 'rounded-t-lg'} ${value.id === 9 && 'rounded-b-lg'}`}
                >
                  <p>{value.language}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TranslationComboBox;
