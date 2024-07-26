import { useQuery } from '@tanstack/react-query';
import { getGoogleSignUp } from '@/services/auth/api';

export const useAuth = () => {
  const useGetGoogleSignUp = (code: string) => {
    return useQuery({
      queryKey: ['auth', 'google', 'signUp'],
      queryFn: () => getGoogleSignUp(code),
    });
  };

  return {
    useGetGoogleSignUp,
  };
};
