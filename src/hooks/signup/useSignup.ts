import { useMutation } from '@tanstack/react-query';
import { postDocsOCR } from '@/services/signup/api';

export const useSignup = () => {
  const usePostDocsOCR = () => {
    return useMutation({
      mutationKey: ['auth', 'google', 'signUp'],
      mutationFn: ({ docsType, docs }: { docsType: string; docs: FormData }) => postDocsOCR(docsType, docs),
    });
  };

  return {
    usePostDocsOCR,
  };
};
