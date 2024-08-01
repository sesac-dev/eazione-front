import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import { useSignup } from '@/hooks/signup/useSignup';
import { ISignUpState } from '../signup/SignUpPage';

// import { dataURLtoFile } from '@/utils/dataURLtoFile';
import { useCapture } from '@/hooks/@common/useCapture';
import Loading from '@/components/@common/Loading';
import passport from '@/assets/passport.png';

const ShootingPassport = () => {
  const navigate = useNavigate();
  const { docsType, setDocsType } = useOutletContext<ISignUpState>();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { videoRef, setCanvas, setDiv } = useCapture();
  const { usePostDocsOCR } = useSignup();
  const { data, isPending, mutate: postDocsOCR } = usePostDocsOCR();

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
  const captureImage = async () => {
    setCaptured(true);

    const response = await fetch(passport);
    const blob = await response.blob();
    const file = new File([blob], `${'passport'}.png`, { type: 'image/png' });

    const formData = new FormData();
    // const image = getCanvasImage()!;
    // dataURLtoFile(image, 'passport')
    formData.append('img', file);

    !docsType && setDocsType('passport');
    postDocsOCR({ docsType, docs: formData });

    setTimeout(() => {
      setCaptured(false);
    }, 250);
  };

  useEffect(() => {
    if (!isPending && data) {
      docsType === 'foreginerfront'
        ? setDocsType('foreginerback')
        : docsType === 'foreginerback'
          ? navigate('/signup/register/foreigner')
          : navigate('/signup/register/passport', {
              state: data,
            });
    }
  }, [isPending, data]);

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
        {isPending && <Loading />}
        <div className="absolute left-0 top-0 h-full w-full px-5 pt-12">
          <div className="flex h-full w-full flex-col items-center py-10 text-center">
            <p className="text-xl">신분증을 촬영하기 전 화면 가이드에 맞춰 외국인 등록증을 놓아주세요.</p>
            <p className="mb-3 mt-10 text-sm">
              {docsType === 'foreginerfront' ? '앞면' : docsType === 'foreginerback' ? '뒷면' : '여권'}
            </p>
            <div
              ref={setDiv}
              className={`mb-5 rounded-2xl border-2 border-white ${docsType !== 'foreginerback' ? 'h-[210px] w-[330px]' : 'h-[330px] w-[210px]'}`}
            >
              <canvas
                ref={setCanvas}
                className={`hidden ${docsType !== 'foreginerback' ? 'h-[210px] w-[330px]' : 'h-[330px] w-[210px]'}`}
              />
            </div>
            <p className="text-sm">
              외국인 등록증은 앞, 뒷면이 필요하므로 <br /> 앞면부터 순서대로 촬영해 주세요. <br />
              어두운 배경에서 빛이 반사되지 않도록 촬영해 주세요.
            </p>
          </div>
        </div>
        <div className="fixed bottom-5 flex w-full max-w-[410px] flex-col items-center px-5">
          <div
            onClick={() => captureImage()}
            className="mb-5 mt-5 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-white"
          >
            <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white">
              {icons.DOCS_CAMERA}
            </div>
          </div>
          <button
            onClick={() => {
              docsType === 'passport' ? navigate('/signup/register/passport') : navigate('/signup/register/foreigner');
            }}
            className="w-full rounded-lg bg-primary py-4 font-bold text-white"
          >
            직접 입력하기
          </button>
        </div>
      </div>
    </>
  );
};

export default ShootingPassport;
