import splash_logo from '@/assets/image/splash_logo.png';
import splash_bot from '@/assets/image/splash_bot.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/chat');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0066FE] via-[#63C4F3] via-75% to-[#7FEBEA]">
      <img src={splash_bot} />
      <div>
        <img src={splash_logo} className="py-2" />
        <p className="w-full text-left text-[21px] font-bold text-white">EZ ONE</p>
      </div>
    </div>
  );
};

export default SplashPage;
