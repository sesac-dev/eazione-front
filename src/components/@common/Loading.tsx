import Lottie from 'lottie-react';
import docsLoading from '@/assets/lotties/docsLoading.json';

const Loading = () => {
  const docsLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: docsLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="absolute left-0 top-0 z-50 h-full w-full bg-black/70">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <Lottie {...docsLoadingOptions} width={70} height={70} />
        <p className="text-white">
          서류 스캔중입니다 <br /> 잠시만 기다려주세요
        </p>
      </div>
    </div>
  );
};

export default Loading;
