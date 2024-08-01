import { reqInstance } from '@/libs/axios';
import { APIResponse } from '@/types';
import { IDocsCountRes } from '@/types/docs';
import { docsOCRResType, IBasicInfoRes } from '@/types/signup';

/* 사용자 기본 정보 조회 */
export const getUserAddInfo = async (): Promise<APIResponse<IBasicInfoRes>> => {
  const { data } = await reqInstance.get(`/members/add-info`);

  console.log(data);
  return data;
};

/* 사용자 문서 조회 (외국인 등록증 or 여권) */
export const getUserDocs = async (docsType: 'passport' | 'IdCard'): Promise<APIResponse<docsOCRResType>> => {
  const { data } = await reqInstance.get(`/members/add-ocr/${docsType}`);

  console.log(data);
  return data;
};

/* 외국인 등록증 or 여권 등록 여부 및 문서 개수 조회 */
export const getUserDocsCount = async (): Promise<APIResponse<IDocsCountRes>> => {
  const { data } = await reqInstance.get(`/docs/count`);

  console.log(data);
  return data;
};
