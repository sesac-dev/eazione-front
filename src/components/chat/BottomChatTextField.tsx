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
      console.log(separator);
      addChattingButton(separator.split(','), tailButtonInfo);
    }
  };

  return (
    <div className="mx-5 my-[10px] flex h-[50px] rounded-xl bg-[#F5F5F5] text-sm text-[#9E9E9E]">
      <input
        name="chat"
        value={values.chat}
        onChange={changer}
        onKeyDown={e => e.key === 'Enter' && sendChatHandler()}
        className="flex-1 bg-[#F5F5F5] p-3 outline-none"
        type="text"
        placeholder="외국인 체류지 변경 신고 방법 알려줘!"
      />
      <div className="flex items-center gap-2 pr-3">
        {icons.CAMERA}
        <p className="h-[16px] w-[1px] bg-[#D9D9D9]"></p>
        {icons.MIC}
      </div>
    </div>
  );
};

export default BottomChatTextField;
