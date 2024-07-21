import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';
import camera from '@/assets/icons/camera.png';
import { useSignup } from '../../hooks/signup/useSignup';
import { ISignUpState } from '../signup/SignUpPage';

import front_foreignerRegister from '@/assets/front_foreignerRegister.jpg';
import back_foreignerRegister from '@/assets/back_foreignerRegister.jpg';
import passport from '@/assets/passport.png';

const ShootingPassport = () => {
  const navigate = useNavigate();
  const { docsType, setDocsType } = useOutletContext<ISignUpState>();
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

  const { usePostDocsOCR } = useSignup();
  const { mutate: postDocsOCR } = usePostDocsOCR();
  const handleRegisterClick = () => {
    const formData = new FormData();

    if (docsType === 'foreginerfront') {
      formData.append(docsType, front_foreignerRegister);
    } else if (docsType === 'foreginerback') {
      formData.append(docsType, back_foreignerRegister);
    } else if (docsType === 'passport') {
      formData.append(docsType, passport);
    }

    // postDocsOCR({ docsType, docs: formData });
    docsType === 'foreginerfront' && setDocsType('foreginerback');

    setCaptured(true);

    setTimeout(() => {
      setCaptured(false);
    }, 250);

    docsType !== 'foreginerfront' && navigate('/signup/register');
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
            <p className="text-xl">신분증을 촬영하기 전 화면 가이드에 맞춰 외국인 등록증을 놓아주세요.</p>
            <p className="mb-3 mt-10 text-sm">
              {docsType === 'foreginerfront' ? '앞면' : docsType === 'foreginerback' ? '뒷면' : '여권'}
            </p>
            <div
              ref={divRef}
              className={`mb-5 rounded-2xl border-2 border-white ${docsType !== 'foreginerback' ? 'h-[210px] w-[330px]' : 'h-[330px] w-[210px]'}`}
            >
              <canvas
                ref={canvasRef}
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
            onClick={() => handleRegisterClick()}
            className="mb-5 mt-5 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[4px] border-white"
          >
            <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-white">
              <img src={camera} className="h-[30px] w-[30px] object-cover" />
            </div>
          </div>
          <button className="w-full rounded-lg bg-primary py-4 font-bold text-white">직접 입력하기</button>
        </div>
      </div>
    </>
  );
};

export default ShootingPassport;
