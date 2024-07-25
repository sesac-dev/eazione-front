import { useState, useEffect, useRef } from 'react';

export const useCapture = () => {
  const [image, setImage] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null | undefined>(null);
  const [div, setDiv] = useState<HTMLDivElement | null | undefined>(null);
  useEffect(() => {
    if (videoRef.current && canvas && div) {
      const divRect = div.getBoundingClientRect();
      const videoRect = videoRef.current.getBoundingClientRect();

      // 캡쳐 할 비디오 영역 계산
      const left = divRect.left - videoRect.left;
      const top = divRect.top - videoRect.top;
      const width = divRect.width;
      const height = divRect.height;

      // 실제 비디오와 화면에 표시된 비디오의 스케일링 비율 계산
      const scaleX = videoRef.current.videoWidth / videoRect.width;
      const scaleY = videoRef.current.videoHeight / videoRect.height;

      // 캔버스의 크기를 div와 동일하게 설정
      canvas.width = width;
      canvas.height = height;

      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

      // video 태그에서 특정영역을 캔버스에 그림
      context!.drawImage(
        videoRef.current,
        left * scaleX,
        top * scaleY,
        width * scaleX,
        height * scaleY,
        0,
        0,
        width,
        height,
      );

      const canvasImage = canvas.toDataURL('image/png');

      setImage(canvasImage);
    }
  }, [videoRef, canvas, div]);

  return { videoRef, setCanvas, setDiv, image };
};
