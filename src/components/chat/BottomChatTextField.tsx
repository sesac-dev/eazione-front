import { useEffect } from 'react';
import { icons } from '../../constants/icons';
import { openAIPrompt } from '../../constants/openAIPrompt';
import useInput from '../../hooks/@common/useInput';
import useOpenAI from '../../hooks/@common/useOpenAI';
import chatStore from '../../stores/chatStore';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './bubble.css';

const BottomChatTextField = () => {
  const { addChatting, addChattingButton } = chatStore();
  const [values, changer, init, sttChanger] = useInput<{ chat: string }>({
    chat: '',
  });

  const { tailButtonInfo, getOpenAIRes } = useOpenAI(() => init());

  const sendChatHandler = async () => {
    if (values.chat) {
      addChatting([{ target: 'USER', content: values.chat, type: 'TEXT' }]);
      const separator = await getOpenAIRes(openAIPrompt.basic, values.chat);
      resetTranscript();
      addChattingButton(separator.split(','), tailButtonInfo);
    }
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    sttChanger(transcript);
  }, [transcript]);

  return (
    <>
      {listening && (
        <div className="absolute -top-24 left-0 right-0 flex items-center justify-center">
          <div className="speech-bubble flex h-16 w-4/5 items-center justify-center text-center font-bold text-white">
            <p>듣고 있어요. 궁금한 것을 말씀해 보세요.</p>
          </div>
        </div>
      )}
      <div className="relative mx-5 my-[10px] flex h-[50px] gap-2">
        <div className="flex h-full w-full items-center rounded-xl bg-ui_11">
          <div className="flex items-center gap-2 pl-3">
            <div>{icons.CAMERA}</div>
            <p className="h-[16px] w-[1px] bg-[#D9D9D9]"></p>
            <div onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'ko' })}>
              {icons.MIC}
            </div>
          </div>
          <input
            name="chat"
            value={values.chat}
            onChange={changer}
            onKeyDown={e => e.key === 'Enter' && sendChatHandler()}
            className="flex-1 rounded-xl bg-ui_11 p-3 text-sm outline-none"
            type="text"
            placeholder="외국인 체류지 변경 신고 방법 알려줘!"
          />
        </div>
        <div
          onClick={() => {
            SpeechRecognition.stopListening();
            sendChatHandler();
          }}
          className="flex items-center justify-center"
        >
          {icons.SEND}
        </div>
      </div>
    </>
  );
};

export default BottomChatTextField;
