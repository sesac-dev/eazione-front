import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';
import ChatInfo from '../../components/chat/ChatInfo';

import useInput from '../../hooks/@common/useInput';
import chatStore, { IChat } from '../../stores/chatStore';
import ChatRoom from '../../components/chat/ChatRoom';
import { icons } from '../../constants/icons';
import { openAIPrompt } from '../../constants/openAIPrompt';
import useOpenAI from '../../hooks/@common/useOpenAI';

const ChatPage = () => {
  const { chatting, addChatting, addChattingButton } = chatStore();
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
    <>
      <div className="h-screen w-full">
        <Header left="Logo" right={icons.NOTIFICATION} />
        <div className="h-[calc(100vh-176px)] w-full pt-12 text-center">
          {chatting.length ? <ChatRoom /> : <ChatInfo />}
        </div>
      </div>
      <footer className="fixed bottom-0 h-44 w-full max-w-[410px] bg-white pt-3 shadow-top">
        <div className="mx-5 flex h-16 rounded-lg bg-[#F5F5F5] p-2 text-[#9E9E9E]">
          <input
            name="chat"
            value={values.chat}
            onChange={changer}
            onKeyDown={e => e.key === 'Enter' && sendChatHandler()}
            className="flex-1 bg-[#F5F5F5] p-3 outline-none"
            type="text"
            placeholder="외국인 전입신고 시 필요한 서류"
          />
          <div className="flex items-center gap-2 pr-3">
            {icons.CAMERA}
            <p className="h-[16px] w-[1px] bg-[#D9D9D9]"></p>
            {icons.MIC}
          </div>
        </div>
        <BottomNavigation />
      </footer>
    </>
  );
};

export default ChatPage;
