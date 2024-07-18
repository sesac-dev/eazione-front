import { create } from 'zustand';
import { ITailButtonInfo } from '../hooks/@common/useOpenAI';

export interface IChat {
  target: 'GPT' | 'USER';
  content: string | null;
  type: 'TEXT' | 'BUTTON';
  clickEventHandler?: () => void;
}
interface IChatStoreState {
  chatting: IChat[];
  addChatting: (chat: IChat[]) => void;
  addChattingButton: (buttonNoArr: string[], tailButtonInfo: ITailButtonInfo[]) => void;
}

const chatStore = create<IChatStoreState>(set => ({
  chatting: [],
  addChatting: (chat: IChat[]) =>
    set(prev => ({
      chatting: [...prev.chatting, ...chat],
    })),
  addChattingButton: (buttonNoArr: string[], tailButtonInfo: ITailButtonInfo[]) => {
    const btnInfo: IChat[] = buttonNoArr.map(no => {
      const { content, clickEvent } = tailButtonInfo[Number(no) - 1];
      return {
        target: 'GPT',
        content: content,
        type: 'BUTTON',
        clickEventHandler: clickEvent,
      };
    });

    set(prev => ({
      chatting: [...prev.chatting, ...btnInfo],
    }));
  },
}));

export default chatStore;
