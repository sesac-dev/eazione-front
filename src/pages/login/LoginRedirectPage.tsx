import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';
import userStore from '@/stores/userStore';

const LoginRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loginUser } = userStore();
  const { useGetGoogleSignUp } = useAuth();

  const { data } = useGetGoogleSignUp(searchParams.get('code')!);

  useEffect(() => {
    if (data) {
      const { email, id, name, tokenDTO, isNew } = data.data;
      loginUser({ id, email, name, accessToken: tokenDTO.accessToken, refreshToken: tokenDTO.refreshToken });

      // 첫 회원가입이면 이용약관페이지
      // 이미 회원가입되어 있다면 / 로 이동
      if (isNew) {
        navigate('/signup');
      } else {
        navigate('/');
      }
    }
  }, [data]);

  return (
    <div className="flex h-screen w-full max-w-[410px] items-center justify-center">
      <div>로그인 진행중입니다...</div>
    </div>
  );
};

export default LoginRedirectPage;
