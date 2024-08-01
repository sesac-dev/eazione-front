import { useMutation } from '@tanstack/react-query';
import { postDocsOCR, postUserAddInfo } from '@/services/signup/api';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();

  const usePostDocsOCR = () => {
    return useMutation({
      mutationKey: ['auth', 'google', 'signUp'],
      mutationFn: ({ docsType, docs }: { docsType: string; docs: FormData }) => postDocsOCR(docsType, docs),
    });
  };

  const usePostUserAddInfo = () => {
    return useMutation({
      mutationKey: ['signup', 'user', 'add-info'],
      mutationFn: (info: FormData) => postUserAddInfo(info),
      onSuccess: () => navigate('/signup/preparing'),
    });
  };

  return {
    usePostDocsOCR,
    usePostUserAddInfo,
  };
};
