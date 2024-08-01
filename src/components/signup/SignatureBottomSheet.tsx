import useSignature from '@/hooks/@common/useSignature';
import BottomSheet from '../@common/BottomSheet';
import { icons } from '@/constants/icons';
import { useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';

const SignatureBottomSheet = ({ closeEvent }: { closeEvent: () => void }) => {
  const navigate = useNavigate();
  const { isPlaceHolder, signatureRef, clearSignatureHandler, beginSignatureHandler } = useSignature();

  return (
    <>
      <BottomSheet onClose={closeEvent}>
        <div className="flex w-full flex-col gap-5">
          <p className="text-left text-xl font-bold">서명입력</p>
          <div className="border-ui_09 relative h-48 rounded-lg border bg-ui_12">
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{
                className: 'w-full h-full',
              }}
              onBegin={beginSignatureHandler}
            />
            {isPlaceHolder && (
              <div className="text-ui_07 absolute left-0 right-0 top-1/2 w-full -translate-y-1/2 text-center text-sm">
                <p>문서 작성에 사용할 서명을 입력해주세요.</p>
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => clearSignatureHandler()}
              className="border-ui_09 flex w-24 rounded-lg border p-2 text-ui_01"
            >
              {icons.REFRESH}
              <p>초기화</p>
            </button>
          </div>
          <div className="flex gap-5">
            <button onClick={closeEvent} className="w-full rounded-lg bg-ui_10 py-4 font-bold text-ui_01">
              이전
            </button>
            <button
              onClick={() => navigate('/signup/preparing')}
              className="w-full rounded-lg bg-primary py-4 font-bold text-white"
            >
              등록하기
            </button>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

export default SignatureBottomSheet;
