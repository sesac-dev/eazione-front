import { useRef, useState } from 'react';

const useSaveImageFile = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [postImg, setPostImg] = useState<File>();
  const [previewImg, setPreviewImg] = useState<string>('');

  const saveImgFiles = () => {
    if (imgRef.current && imgRef.current.files) {
      const file: File = imgRef.current.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const result: string | null = reader.result as string;

        setPreviewImg(result);
        setPostImg(file);
      };
    }
  };

  return { imgRef, postImg, previewImg, saveImgFiles };
};

export default useSaveImageFile;
