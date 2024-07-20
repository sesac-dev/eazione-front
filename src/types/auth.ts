export interface ILoginRes {
  id: number;
  email: string;
  name: string;
  isNew: boolean;
  tokenDTO: IToken;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
