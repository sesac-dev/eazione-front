export interface ITranslation {
  id: number;
  language: string;
}

export const translationLanguage: ITranslation[] = [
  { id: 0, language: '번역 언어 선택' },
  { id: 1, language: '한국어' },
  { id: 2, language: 'English' },
  { id: 3, language: '日本語' },
  { id: 4, language: '中国人' },
  { id: 5, language: 'čeština' },
  { id: 6, language: 'spanish' },
];
