import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatPage from '../../pages/chat/ChatPage';
import TranslationPage from '../../pages/translation/TranslationPage';
import MyPage from '../../pages/my/MyPage';
import PreparingShooting from '../../pages/translation/PreparingShooting';
import ShootingPage from '../../pages/shooting/ShootingPage';
import LoginPage from '../../pages/login/LoginPage';
import AutocompletePage from '../../pages/translation/AutocompletePage';
import LoginRedirectPage from '../../pages/login/LoginRedirectPage';
import SignUpPage from '../../pages/signup/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
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
