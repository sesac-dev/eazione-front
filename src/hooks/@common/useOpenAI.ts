import OpenAI from 'openai';
import chatStore from '@/stores/chatStore';
import { openAIPrompt } from '@/constants/openAIPrompt';
import { useNavigate } from 'react-router-dom';
import { useGeoLocation } from './useGeoLocation';
import { useState } from 'react';

export interface ITailButtonInfo {
  no: number;
  content: string;
  clickEvent: () => void;
}

const useOpenAI = (initValue: () => void) => {
  const navigate = useNavigate();
  const { location } = useGeoLocation();
  const { setIsLoading, addChatting } = chatStore();

  const [phone, setPhone] = useState<string>('');

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const getOpenAIRes = async (prompt: string, content: string) => {
    setIsLoading(true);
    initValue();
    const res = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: content },
        { role: 'assistant', content: openAIPrompt.assistant },
      ],
      max_tokens: 4096,
      temperature: 0.7,
      model: 'gpt-4-turbo',
    });

    const [ans, sep] = res.choices[0].message.content?.split('$')!;

    addChatting([{ target: 'GPT', content: ans, type: 'TEXT' }]);
    setIsLoading(false);
    return sep;
  };

  const complaintButtonClickEventHandler = () => {
    addChatting([
      {
        target: 'GPT',
        content:
          '해당 민원을 처리하기 위해서는 통합 신청서 작성이 필요합니다. \n직접 카메라로 서류를 촬영하거나 [서류 작성] 버튼을 눌러주세요.',
        type: 'TEXT',
      },
      {
        target: 'GPT',
        content: '서류 촬영',
        type: 'BUTTON',
        clickEventHandler: () => navigate('/translation'),
      },
      {
        target: 'GPT',
        content: '서류 작성',
        type: 'BUTTON',
        clickEventHandler: () => navigate('/translation'),
      },
    ]);
  };

  const placeGuideButtonClickEventHandler = async () => {
    const separator = await getOpenAIRes(
      openAIPrompt.location,
      `latitude: ${location?.latitude}, longitude: ${location?.longitude}`,
    );

    const [lat, lng, name, phone] = separator.split(',').map(v => v.trim());

    const telLink = `tel:${phone}`;
    const naverRouteLink = `nmap://route/public?slat=${location?.latitude}&slng=${location?.longitude}&dlat=${lat}&dlng=${lng}&dname=${name}`;

    console.log(naverRouteLink);
    console.log(telLink);
    setPhone(phone);

    addChatting([
      {
        target: 'GPT',
        content: '실시간 길안내',
        type: 'BUTTON',
        clickEventHandler: () => window.open(naverRouteLink),
      },
      {
        target: 'GPT',
        content: '전화 걸기',
        type: 'BUTTON',
        clickEventHandler: () => (window.location.href = telLink),
      },
      {
        target: 'GPT',
        content: '민원 신청',
        type: 'BUTTON',
        clickEventHandler: complaintButtonClickEventHandler,
      },
    ]);
  };

  const pageCheckButtonClickEventHandler = () => window.open('https://www.hikorea.go.kr/Main.pt');

  const callingButtonClickEventHandler = () => {
    console.log(phone);
    const telLink = `tel:${phone}`;
    window.location.href = telLink;
  };

  const tailButtonInfo: ITailButtonInfo[] = [
    {
      no: 1,
      content: '민원 신청',
      clickEvent: complaintButtonClickEventHandler,
    },
    {
      no: 2,
      content: '장소 안내',
      clickEvent: placeGuideButtonClickEventHandler,
    },
    {
      no: 3,
      content: '홈페이지 확인',
      clickEvent: pageCheckButtonClickEventHandler,
    },
    {
      no: 4,
      content: '전화 걸기',
      clickEvent: callingButtonClickEventHandler,
    },
  ];

  return { phone, tailButtonInfo, getOpenAIRes };
};

export default useOpenAI;
