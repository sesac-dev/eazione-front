import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';
import camera from '@/assets/icons/camera.png';

const ShootingPage = () => {
  const navigate = useNavigate();

  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const getMediaPermission = useCallback(async () => {
    try {
      const video = { audio: true, video: true };
      // const video = { video: { facingMode: { exact: 'environment' } } };
      const videoStream = await navigator.mediaDevices.getUserMedia(video);
      setStream(videoStream);

      if (videoRef.current) {
        videoRef.current.srcObject = videoStream;
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [captured, setCaptured] = useState<boolean>(false);
  const [img, setImg] = useState<string>('');

  const captureImage = () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const divElement = divRef.current;

    if (videoElement && canvasElement && divElement) {
      const divRect = divElement.getBoundingClientRect();
      const videoRect = videoElement.getBoundingClientRect();

      // 캡쳐 할 비디오 영역 계산
      const left = divRect.left - videoRect.left;
      const top = divRect.top - videoRect.top;
      const width = divRect.width;
      const height = divRect.height;

      // 실제 비디오와 화면에 표시된 비디오의 스케일링 비율 계산
      const scaleX = videoElement.videoWidth / videoRect.width;
      const scaleY = videoElement.videoHeight / videoRect.height;

      // 캔버스의 크기를 div와 동일하게 설정
      canvasElement.width = width;
      canvasElement.height = height;

      console.log(left, top, width, height);
      console.log(left * scaleX, top * scaleY, width * scaleX, height * scaleY);
      const context: CanvasRenderingContext2D | null = canvasElement.getContext('2d');

      // video 태그에서 특정영역을 캔버스에 그림
      context!.drawImage(
        videoElement,
        left * scaleX,
        top * scaleY,
        width * scaleX,
        height * scaleY,
        0,
        0,
        width,
        height,
      );

      //캔버스에 그려진 내용을 URL문자열로 반환해준다.

      const image = canvasElement.toDataURL('image/png');

      setCaptured(true);

      setTimeout(() => {
        setImg(image);
        setCaptured(false);
      }, 250);
    }
  };

  useEffect(() => {
    // 아직 media stream이 설정되지 않았다면 호출
    if (!stream) {
      getMediaPermission();
    }

    // 페이지 이탈 또는 컴포넌트 언마운트 시 미디어 스트림 정지
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <>
      <div className={`relative h-full w-full text-white ${captured && 'animate-captureEnter'}`}>
        <video ref={videoRef} className="h-full w-full -scale-x-100 object-cover" autoPlay playsInline muted />
        <Header left={icons.WHITE_BACK} left_func={() => navigate(-1)} />
        <div className="absolute left-0 top-0 h-full w-full px-5 pt-12">
          <div className="flex h-full w-full flex-col items-center py-10 text-center">
            <p className="text-xl">
              문서를 촬영 후 스캔할게요 <br /> 화면 가이드에 맞춰 서류를 놓아주세요
            </p>
            <div ref={divRef} className="mb-5 mt-10 h-[376px] w-[268px] rounded-2xl border-2 border-white">
              <img src={img} className="h-full w-full" />
              <canvas ref={canvasRef} className="hidden h-[376px] w-[268px]" />
            </div>
            <p className="text-sm">어두운 배경에서 빛이 반사되지 않도록 촬영해 주세요</p>
            <div
              onClick={() => captureImage()}
              className="mt-5 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-white"
            >
              <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white">
                <img src={camera} className="h-[30px] w-[30px] object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-5 w-full max-w-[410px] px-5">
          <button className="w-full rounded-lg bg-primary py-4 font-bold text-white">문서 업로드 하기</button>
        </div>
      </div>
    </>
  );
};

export default ShootingPage;
