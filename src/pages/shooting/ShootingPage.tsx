import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';

const ShootingPage = () => {
  const navigate = useNavigate();

  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      <div className="relative h-full w-full text-white">
        <video ref={videoRef} className="h-full w-full -scale-x-100 object-cover" autoPlay playsInline muted />
        <Header left={icons.WHITE_BACK} left_func={() => navigate(-1)} />
        <div className="absolute left-0 top-0 h-full w-full px-5 pt-12">
          <div className="flex h-full w-full flex-col items-center justify-around py-10 text-center">
            <div className="h-full w-full">
              <p className="text-xl">
                문서를 촬영 후 스캔할게요 <br /> 화면 가이드에 맞춰 서류를 놓아주세요
              </p>
              {/* h-222px */}
              <div className="mb-5 mt-10 h-[423px] w-full rounded-2xl border-2 border-white">
                <canvas ref={canvasRef} className="hidden h-full w-full" />
              </div>
              <p className="text-sm">어두운 배경에서 빛이 반사되지 않도록 촬영해 주세요</p>
            </div>
            <div className="w-full rounded-lg bg-[#ECECEC] py-4 font-bold text-[#808080]">확인</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShootingPage;
