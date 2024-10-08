import { IBasicMember, IIdentityCard, IMember, IPassport } from '.';

interface IPassportWithMember extends IPassport {
  member: IMember;
}
interface IIdentityCardWithMember extends IIdentityCard {
  member: IMember;
}

// Union type 정의
export type docsOCRResType = IPassportWithMember | IIdentityCardWithMember;

export interface IBasicInfoReq {
  info: IBasicMember;
}

export interface IBasicInfoRes extends IMember {
  currentWorkplace: string;
  currentWorkplaceRegistrationNumber: string;
  workplacePhoneNumber: string;
  profile: string;
  sign: string;
}
