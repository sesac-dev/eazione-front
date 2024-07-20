import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
  isLogin: boolean;
  id: number;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
  loginUser: ({
    id,
    email,
    accessToken,
    refreshToken,
  }: {
    id: number;
    email: string;
    name: string;
    accessToken: string;
    refreshToken: string;
  }) => void;
  logoutUser: () => void;
}

const userStore = create(
  persist<IUserState>(
    set => ({
      isLogin: false,
      id: 0,
      email: '',
      name: '',
      accessToken: '',
      refreshToken: '',
      loginUser: ({ id, email, name, accessToken, refreshToken }) =>
        set({
          id,
          email,
          name,
          accessToken,
          refreshToken,
          isLogin: true,
        }),

      logoutUser: () =>
        set({
          id: 0,
          email: '',
          name: '',
          accessToken: '',
          refreshToken: '',
          isLogin: false,
        }),
    }),
    {
      name: 'user-store',
    },
  ),
);

export default userStore;
