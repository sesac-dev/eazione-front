import { multipartInstance } from '../../libs/axios';
import { APIResponse } from '../../types';
import { docsOCRResType } from '../../types/signup';

/* 외국인 등록증 및 여권 등록 */
export const postDocsOCR = async (docsType: string, docs: FormData): Promise<APIResponse<docsOCRResType>> => {
  console.log(docsType, docs);
  const { data } = await multipartInstance.post(`/members/add-ocr/${docsType}`, docs);

  console.log(data);
  return data;
};
