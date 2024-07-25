import { IIdentityCard, IMember, IPassport } from '.';

interface IPassportWithMember extends IPassport {
  member: IMember;
}
interface IIdentityCardWithMember extends IIdentityCard {
  member: IMember;
}

// Union type 정의
export type docsOCRResType = IPassportWithMember | IIdentityCardWithMember;
