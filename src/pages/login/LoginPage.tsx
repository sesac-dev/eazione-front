import apple from '@/assets/apple.png';
import google from '@/assets/google.png';
import kakao from '@/assets/kakao.png';
import naver from '@/assets/naver.png';

const LoginPage = () => {
  const googleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="h-full w-full px-5 pt-12">
          <div className="flex w-full flex-col gap-10">
            <div className="flex flex-col gap-2 py-5">
              <h1 className="text-xl font-bold">
                일상생활의 편리함을
                <br /> 간편하고 빠르게 시작해 보세요.
              </h1>
              <p className="text-sm text-[#ADADAD]">복잡한 일상생활의 문제들을 해결해 줄 AI 챗봇 서비스</p>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 pt-10">
              <img src={kakao} />
              <img src={naver} />
              <img src={google} onClick={() => googleLogin()} />
              <img src={apple} />
            </div>
            <p className="text-center text-sm text-[#ADADAD]">
              계정을 잊어버리셨나요? <span className="underline">계정찾기</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
