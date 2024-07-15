import { useNavigate } from 'react-router-dom';

import camera from '@/assets/icons/camera.png';
import mic from '@/assets/icons/mic.png';

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <footer className="shadow-top fixed bottom-0 h-44 w-full max-w-[410px] bg-white pt-3">
      <div className="mx-5 flex rounded-lg bg-[#F5F5F5] p-2 text-[#9E9E9E]">
        <input
          className="flex-1 bg-[#F5F5F5] p-3 outline-none"
          type="text"
          placeholder="외국인 전입신고 시 필요한 서류"
        />
        <div className="flex items-center gap-2 pr-3">
          <img src={camera} className="h-6 w-6" />
          <p className="h-[16px] w-[1px] bg-[#D9D9D9]"></p>
          <img src={mic} className="h-[19px] w-[14px]" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-10 py-5 text-xs">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#878787] text-white">Icon</div>
          <p className="font-bold text-[#878787]">AI 채팅/검색</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#D9D9D9] text-[#8B8B8B]">Icon</div>
          <p className="text-[#A4A4A4]">자동 문서 번역</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center bg-[#D9D9D9] text-[#8B8B8B]">Icon</div>
          <p className="text-[#A4A4A4]">마이페이지</p>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigation;
