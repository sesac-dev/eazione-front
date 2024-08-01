import { multipartInstance, reqInstance } from '@/libs/axios';
import { APIResponse } from '@/types';
import { IDocsRes } from '@/types/docs';

/* 사용자 모든 서류 가져오기 */
export const getDocsList = async (): Promise<APIResponse<IDocsRes>> => {
  const { data } = await reqInstance.get(`/docs/nomal`);

  console.log(data);
  return data;
};

/* 사용자 서류 저장 */
export const postSaveDocs = async (docs: FormData): Promise<APIResponse<IDocsRes>> => {
  const { data } = await multipartInstance.post(`/docs/nomal`, docs);

  console.log(data);
  return data;
};
