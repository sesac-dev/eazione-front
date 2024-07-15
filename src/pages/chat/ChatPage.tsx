import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';
import ChatInfo from '../../components/chat/ChatInfo';

const ChatPage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="h-[calc(100vh-176px)] w-full text-center">
          <ChatInfo />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default ChatPage;
