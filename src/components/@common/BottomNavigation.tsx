import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex w-full items-center justify-between px-10 py-5 text-xs">
        <li onClick={() => navigate('/')} className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#878787] text-white">Icon</div>
          <p className="font-bold text-[#878787]">AI 채팅/검색</p>
        </li>
        <li onClick={() => navigate('/translation')} className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#D9D9D9] text-[#8B8B8B]">Icon</div>
          <p className="text-[#A4A4A4]">자동 문서 번역</p>
        </li>
        <li onClick={() => navigate('/my')} className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#D9D9D9] text-[#8B8B8B]">Icon</div>
          <p className="text-[#A4A4A4]">마이페이지</p>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
