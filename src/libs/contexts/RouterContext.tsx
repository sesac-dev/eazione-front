import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatPage from '../../pages/chat/ChatPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatPage />,
  },
]);

const RouterContext = () => {
  return <RouterProvider router={router} />;
};

export default RouterContext;
