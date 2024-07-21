import { icons } from '../../constants/icons';
import { openAIPrompt } from '../../constants/openAIPrompt';
import useInput from '../../hooks/@common/useInput';
import useOpenAI from '../../hooks/@common/useOpenAI';
import chatStore from '../../stores/chatStore';

const BottomChatTextField = () => {
  const { addChatting, addChattingButton } = chatStore();
  const [values, changer, init] = useInput<{ chat: string }>({
    chat: '',
  });

  const { tailButtonInfo, getOpenAIRes } = useOpenAI(() => init());

  const sendChatHandler = async () => {
    if (values.chat) {
      addChatting([{ target: 'USER', content: values.chat, type: 'TEXT' }]);
      const separator = await getOpenAIRes(openAIPrompt.basic, values.chat);
      addChattingButton(separator.split(','), tailButtonInfo);
    }
  };

  return (
    <>
      <div className="mx-5 my-[10px] flex h-[50px] gap-2">
        <div className="flex h-full w-full items-center rounded-xl bg-[#F5F5F5]">
          <div className="flex items-center gap-2 pl-3">
            {icons.CAMERA}
            <p className="h-[16px] w-[1px] bg-[#D9D9D9]"></p>
            {icons.MIC}
          </div>
          <input
            name="chat"
            value={values.chat}
            onChange={changer}
            onKeyDown={e => e.key === 'Enter' && sendChatHandler()}
            className="flex-1 rounded-xl bg-[#F5F5F5] p-3 text-sm outline-none"
            type="text"
            placeholder="외국인 체류지 변경 신고 방법 알려줘!"
          />
        </div>
        <div onClick={() => sendChatHandler()} className="flex items-center justify-center">
          {icons.SEND}
        </div>
      </div>
    </>
  );
};

export default BottomChatTextField;
