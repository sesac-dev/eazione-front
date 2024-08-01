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
  id: number;
  number: string; // 외국인 등록번호
  name: string; // 성명
  county: string; // 국가&지역
  status: string; // 체류 자격
  issueDate: string;
  startDateOfStay: string; // 허가 일자
  endDateOfStay: string; // 만료 일자
  address: string; // 체류지
  reportDate: string; // 신고일
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
