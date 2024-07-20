import { useEffect, useRef } from 'react';
import chatStore from '../../stores/chatStore';
import TailButton from './TailButton';
import chatBot from '@/assets/chatBot.png';

const ChatRoom = () => {
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const { isLoading, chatting } = chatStore();

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
                  <div className="">
                    <img src={chatBot} className="mb-1"></img>
                    <p className="bg-tint_01 ml-[30px] rounded-b-2xl rounded-se-2xl px-3 py-4 text-sm">{`${chat.content}`}</p>
                  </div>
                ) : (
                  <TailButton content={chat.content!} clickEvent={chat.clickEventHandler!} />
                )}
              </>
            ) : (
              <>
                <p className="rounded-t-2xl rounded-bl-2xl bg-[#F5F5F5] px-3 py-4 text-sm">{`${chat.content}`}</p>
              </>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="py-5">
            <img src={chatBot} className="mb-1"></img>
            <div className="flex w-full flex-col items-center justify-center gap-5">
              <div className="flex gap-10">
                <div className="bg-tint_03 h-3 w-3 rounded-full"></div>
                <div className="bg-tint_03 h-3 w-3 rounded-full"></div>
                <div className="bg-tint_03 h-3 w-3 rounded-full"></div>
              </div>
              <p className="text-tint_04 text-sm">답변을 작성중입니다</p>
            </div>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>
    </>
  );
};

export default ChatRoom;
