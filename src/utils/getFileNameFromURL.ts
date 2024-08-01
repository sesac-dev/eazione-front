// url로 부터 문서 이름을 가져오는 util 함수
export const getFileNameFromURL = (url: string) => {
  const str = url.split('/');
  const name = str[str.length - 1];

  const decode = decodeURI(name);
  const regex = /[0-9]/g;

  return decode.replace(regex, '');
};
