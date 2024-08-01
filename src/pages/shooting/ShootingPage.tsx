import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import { useCapture } from '@/hooks/@common/useCapture';

const ShootingPage = () => {
  const navigate = useNavigate();

  const [stream, setStream] = useState<MediaStream | null>(null);
  const { videoRef, setCanvas, setDiv, getCanvasImage } = useCapture();
  const [image, setImage] = useState<string>('');
  const getMediaPermission = useCallback(async () => {
    try {
      // const video = { audio: true, video: true };
      const video = { video: { facingMode: { exact: 'environment' } } };
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

  const captureImage = () => {
    const canvasImage = getCanvasImage();

    setImage(canvasImage!);
    setCaptured(true);

    setTimeout(() => {
      setCaptured(false);
    }, 250);
  };

  useEffect(() => {
    if (image) {
      navigate('/autocomplete');
    }
  }, [image]);

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
        <video ref={videoRef} className="h-full w-full object-cover" autoPlay playsInline muted />
        <Header left={icons.WHITE_BACK} left_func={() => navigate(-1)} />
        <div className="absolute left-0 top-0 h-full w-full px-5 pt-12">
          <div className="flex h-full w-full flex-col items-center py-10 text-center">
            <p className="text-xl">
              문서를 촬영 후 스캔할게요 <br /> 화면 가이드에 맞춰 서류를 놓아주세요
            </p>
            <div ref={setDiv} className="mb-5 mt-10 h-[376px] w-[268px] rounded-2xl border-2 border-white">
              <canvas ref={setCanvas} className="hidden h-[376px] w-[268px]" />
            </div>
            <p className="text-sm">어두운 배경에서 빛이 반사되지 않도록 촬영해 주세요</p>
            <div
              onClick={() => captureImage()}
              className="mt-5 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-white"
            >
              <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white">
                {icons.DOCS_CAMERA}
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
