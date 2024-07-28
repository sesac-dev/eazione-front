import splash_logo from '@/assets/image/splash_logo.png';
import splash_bot from '@/assets/image/splash_bot.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '@/stores/userStore';

const SplashPage = () => {
  const navigate = useNavigate();
  const { isLogin } = userStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      isLogin ? navigate('/chat') : navigate('/login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0066FE] via-[#63C4F3] via-75% to-[#7FEBEA]">
      <img src={splash_bot} />
      <div className="mb-14">
        <img src={splash_logo} className="py-4" />
        <p className="w-full text-left text-[21px] font-bold text-white">EZ ONE</p>
      </div>
    </div>
  );
};

export default SplashPage;
