import { useEffect, useState } from 'react';
import Modal from '../@common/Modal';
import { useDocs } from '@/hooks/docs/useDocs';
import useInput from '@/hooks/@common/useInput';

const DocsSaveModal = ({ closeHandler, docsImg }: { closeHandler: () => void; docsImg: string }) => {
  const [isDifferentNameModalOpen, setIsDifferentNameModalOpen] = useState<boolean>(false);
  const { usePostSaveDocs } = useDocs();
  const { mutate, isSuccess } = usePostSaveDocs();
  const [values, changer] = useInput({ fileName: '' });

  const postSaveHandler = async () => {
    const response = await fetch(docsImg);
    const blob = await response.blob();
    const file = new File([blob], `${values.fileName || '문서'}.png`, { type: 'image/png' });

    const formData = new FormData();
    formData.append('img', file);

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      closeHandler();
    }
  }, [isSuccess]);

  return (
    <>
      {isDifferentNameModalOpen ? (
        <Modal onClose={closeHandler} width="w-full" bottom="bottom-1/2 translate-y-1/2">
          <div className="mx-5 flex flex-col justify-center gap-5 rounded-lg bg-white px-5 py-5 text-center text-ui_01">
            <p className="text-lg font-semibold">다른 이름으로 저장</p>
            <p>저장할 파일 이름을 작성해 주세요.</p>
            <input
              name="fileName"
              onChange={changer}
              value={values.fileName}
              type="text"
              placeholder="파일명을 작성해주세요"
              className="rounded-lg border bg-ui_11 p-3 outline-none"
            />
            <button onClick={postSaveHandler} className="w-full rounded-lg bg-primary py-4 font-bold text-white">
              확인
            </button>
          </div>
        </Modal>
      ) : (
        <Modal onClose={closeHandler} width="w-full" bottom="bottom-5">
          <div className="mx-5 flex h-40 flex-col justify-center gap-5 rounded-lg bg-white px-5 text-ui_01">
            <div
              onClick={() => setIsDifferentNameModalOpen(true)}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-ui_10 font-semibold"
            >
              <p>다른 이름으로 저장</p>
            </div>
            <div
              onClick={postSaveHandler}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-ui_10 font-semibold"
            >
              <p>저장</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DocsSaveModal;
