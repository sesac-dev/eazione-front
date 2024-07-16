import { useEffect, useRef } from 'react';
import chatStore from '../../stores/chatStore';

const ChatRoom = () => {
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const { chatting } = chatStore();

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'instant' });
  }, [chatting]);

  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap gap-5 overflow-y-scroll p-5">
        {chatting.map((chat, index) => (
          <div key={index} className={`flex ${chat.target === 'gpt' ? 'justify-start' : 'justify-end'}`}>
            <div className="flex">
              {chat.target === 'gpt' ? (
                <>
                  <p className="rounded-2xl bg-[#F5F5F5] px-3 py-4 text-sm">{`${chat.content}`}</p>
                </>
              ) : (
                <>
                  <p className="rounded-2xl bg-[#F5F5F5] px-3 py-4 text-sm">{`${chat.content}`}</p>
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </>
  );
};

export default ChatRoom;
