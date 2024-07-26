import BottomNavigation from '@/components/@common/BottomNavigation';
import Header from '@/components/@common/Header';
import ChatInfo from '@/components/chat/ChatInfo';
import ChatRoom from '@/components/chat/ChatRoom';

import chatStore from '@/stores/chatStore';
import ezone from '@/assets/image/ezone.png';

const ChatPage = () => {
  const { chatting } = chatStore();

  const ezoneImg = <img src={ezone}></img>;

  return (
    <>
      <div className="h-screen w-full">
        <Header left={ezoneImg} />
        <div className="h-[calc(100vh-150px)] w-full pt-12 text-center">
          {chatting.length ? <ChatRoom /> : <ChatInfo />}
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default ChatPage;
