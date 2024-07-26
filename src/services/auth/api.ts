import { reqInstance } from '@/libs/axios';
import { APIResponse } from '@/types';
import { ILoginRes } from '@/types/auth';

/* 로그인 */
export const getGoogleSignUp = async (code: string): Promise<APIResponse<ILoginRes>> => {
  const { data } = await reqInstance.get('/members/oauth/google/signup/l', {
    params: {
      code,
    },
  });

  console.log(data);
  return data;
};
