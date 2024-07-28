import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatPage from '@/pages/chat/ChatPage';
import TranslationPage from '@/pages/translation/TranslationPage';
import MyPage from '@/pages/my/MyPage';
import PreparingShooting from '@/pages/translation/PreparingShooting';
import ShootingPage from '@/pages/shooting/ShootingPage';
import LoginPage from '@/pages/login/LoginPage';
import AutocompletePage from '@/pages/translation/AutocompletePage';
import LoginRedirectPage from '@/pages/login/LoginRedirectPage';
import SignUpPage from '@/pages/signup/SignUpPage';
import UseAgree from '@/components/signup/UseAgree';
import PreparingSignUp from '@/components/signup/PreparingSignUp';
import ShootingPassport from '@/pages/shooting/ShootingPassport';
import SignUpInfo from '@/components/signup/SignUpInfo';
import ForeignerRegister from '@/components/signup/register/ForeignerRegister';
import Passport from '@/components/signup/register/Passport';
import Basic from '@/components/signup/Basic';
import DocsPage from '@/pages/my/DocsPage';
import SplashPage from '@/pages/splash/SplashPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/login/oauth2/code/google',
    element: <LoginRedirectPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
    children: [
      {
        path: '',
        element: <UseAgree />,
      },
      {
        path: 'basic',
        element: <Basic />,
      },
      {
        path: 'preparing',
        element: <PreparingSignUp />,
      },
      {
        path: 'shooting',
        element: <ShootingPassport />,
      },
      {
        path: 'register',
        element: <SignUpInfo />,
        children: [
          {
            path: 'foreigner',
            element: <ForeignerRegister />,
          },
          {
            path: 'passport',
            element: <Passport />,
          },
        ],
      },
    ],
  },
  {
    path: '/translation',
    element: <TranslationPage />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/my/docs',
    element: <DocsPage />,
  },
  {
    path: '/shooting',
    element: <ShootingPage />,
  },
  {
    path: '/preparing/shooting',
    element: <PreparingShooting />,
  },
  {
    path: '/autocomplete',
    element: <AutocompletePage />,
  },
]);

const RouterContext = () => {
  return <RouterProvider router={router} />;
};

export default RouterContext;
