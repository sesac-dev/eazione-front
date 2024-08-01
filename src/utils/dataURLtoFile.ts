// canvas base64 image data를 File 객체로 변환하는 함수
export const dataURLtoFile = (dataUrl: string, name: string) => {
  const blobBin = atob(dataUrl.split(',')[1]); // base64 데이터 디코딩
  const array = [];
  for (let i = 0; i < blobBin.length; i++) {
    array.push(blobBin.charCodeAt(i));
  }
  const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
  console.log(name);
  return blob;
};

// const decodedURL = dataUrl.replace(/^data:image\/\w+;base64,/, '');
//   const buf = Buffer.from(decodedURL, 'base64');
//   const blob = new Blob([buf], { type: 'image/png' });
//   return new File([blob], `${name}.png`, { type: 'image/png' });
