import { useEffect, useRef } from 'react';
import chatStore from '../../stores/chatStore';
import TailButton from './TailButton';

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
          <div
            key={index}
            className={`flex whitespace-pre-wrap text-left ${chat.target === 'USER' ? 'justify-end' : 'justify-start'}`}
          >
            {chat.target === 'GPT' ? (
              <>
                {chat.type === 'TEXT' ? (
                  <p className="rounded-2xl bg-[#F5F5F5] px-3 py-4 text-sm">{`${chat.content}`}</p>
                ) : (
                  <TailButton content={chat.content!} clickEvent={chat.clickEventHandler!} />
                )}
              </>
            ) : (
              <>
                <p className="rounded-2xl bg-[#F5F5F5] px-3 py-4 text-sm">{`${chat.content}`}</p>
              </>
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </>
  );
};

export default ChatRoom;
