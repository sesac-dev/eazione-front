import { useLocation, useNavigate } from 'react-router-dom';
import { icons } from '../../constants/icons';
import BottomChatTextField from '../chat/BottomChatTextField';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <footer
      className={`${pathname === '/' ? 'h-[150px]' : 'h-[80px]'} fixed bottom-0 w-full max-w-[410px] bg-white shadow-top`}
    >
      {pathname === '/' && <BottomChatTextField />}
      <nav>
        <ul className="flex w-full items-center justify-between px-10 text-xs font-semibold">
          <li
            onClick={() => navigate('/')}
            className={`flex flex-col items-center justify-center ${pathname === '/' ? 'text-primary' : 'text-[#C2C2C2]'}`}
          >
            {pathname === '/' ? icons.ENABLE_CHAT : icons.DISABLE_CHAT}
            <p>AI 채팅/검색</p>
          </li>
          <li
            onClick={() => navigate('/translation')}
            className={`flex flex-col items-center justify-center ${pathname === '/translation' ? 'text-primary' : 'text-[#C2C2C2]'}`}
          >
            {pathname === '/translation' ? icons.ENABLE_DOC : icons.DISABLE_DOC}
            <p>자동 문서 번역</p>
          </li>
          <li
            onClick={() => navigate('/my')}
            className={`flex flex-col items-center justify-center ${pathname === '/my' ? 'text-primary' : 'text-[#C2C2C2]'}`}
          >
            {pathname === '/my' ? icons.ENABLE_MY : icons.DISABLE_MY}
            <p>마이페이지</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
