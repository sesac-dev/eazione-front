import { create } from 'zustand';

interface IChat {
  target: 'gpt' | 'user';
  content: string;
}
interface IChatStoreState {
  chatting: IChat[];
  addChatting: (chat: IChat) => void;
}

const chatStore = create<IChatStoreState>(set => ({
  chatting: [],
  addChatting: (chat: IChat) =>
    set(prev => ({
      chatting: [...prev.chatting, chat],
    })),
}));

export default chatStore;
