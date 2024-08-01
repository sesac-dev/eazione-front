import { getUserAddInfo, getUserDocs, getUserDocsCount } from '@/services/user/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const useGetUserAddInfo = () => {
    return useQuery({
      queryKey: ['my', 'user', 'basic', 'info'],
      queryFn: () => getUserAddInfo(),
    });
  };

  const useGetUserDocs = (docsType: 'passport' | 'IdCard') => {
    return useMutation({
      mutationKey: ['my', 'user', 'basic', 'info', docsType],
      mutationFn: () => getUserDocs(docsType),
    });
  };

  const useGetUserDocsCount = () => {
    return useQuery({
      queryKey: ['my', 'user', 'docs', 'count'],
      queryFn: () => getUserDocsCount(),
    });
  };

  return {
    useGetUserAddInfo,
    useGetUserDocs,
    useGetUserDocsCount,
  };
};
