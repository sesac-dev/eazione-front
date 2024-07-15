import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatPage from '../../pages/chat/ChatPage';
import TranslationPage from '../../pages/translation/TranslationPage';
import MyPage from '../../pages/my/MyPage';

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
]);

const RouterContext = () => {
  return <RouterProvider router={router} />;
};

export default RouterContext;
