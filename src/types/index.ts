export interface APIResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface IPassport {
  passportNumber: string; // 여권 번호
  surName: string; // 성
  givenName: string; // 이름
  dateOfBirth: string; // 생년월일
  sex: string; // 성별
  nationality: string; // 국적
  dateOfIssue: string; // 발급일
  expiryOfDate: string; // 기간만료일
  issuingAuthority: string; // 발행관청
  type: string; // 종류
  countryOfIssue: string; // 여권 발행 국가
}

export interface IIdentityCard {
  foreignNumber: string;
  name: string;
  country: string;
  status: string;
  issueDate: string;
  startDateOfStay: string;
  endDateOfStay: string;
  address: string;
  reportDate: string;
}

export interface IMember {
  id: number;
  email: string;
  name: string;
  income: number;
  housingType: string | null;
  phoneNumber: string | null;
}

export interface IBasicMember {
  income: number;
  phoneNumber: string;
  familyMember: IFamily[];
  housingType: string;
  currentWorkplace: string;
  currentWorkplaceRegistrationNumber: string;
  workplacePhoneNumber: string;
}

export interface IFamily {
  name: string;
  relationship: string;
  residence: string;
}
