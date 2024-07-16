import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatPage from '../../pages/chat/ChatPage';
import TranslationPage from '../../pages/translation/TranslationPage';
import MyPage from '../../pages/my/MyPage';
import PreparingShooting from '../../pages/translation/PreparingShooting';
import ShootingPage from '../../pages/shooting/ShootingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatPage />,
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
]);

const RouterContext = () => {
  return <RouterProvider router={router} />;
};

export default RouterContext;
