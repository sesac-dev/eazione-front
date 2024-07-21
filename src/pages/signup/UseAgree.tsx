import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../constants/icons';
import Header from '../../components/@common/Header';

const UseAgree = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState<boolean>(false);

  return (
    <>
      <Header left={icons.BLACK_CANCEL} left_func={() => navigate('/login')} />
      <div className="h-full w-full px-5 pt-12">
        <h1 className="pt-5 text-xl font-bold">
          서비스 이용을 위한 약관 동의와
          <br />
          인증이 필요합니다.
        </h1>
        <div className="flex w-full flex-col pt-20 font-bold">
          <div
            onClick={() => setAgree(true)}
            className={`flex h-14 w-full items-center gap-3 rounded-xl px-3 ${agree ? 'bg-tint_01' : 'bg-ui_11'}`}
          >
            <div>{agree ? icons.ENABLE_CHECK : icons.DISABLE_CHECK}</div>
            <p>전체 내용에 동의합니다.</p>
          </div>
          <div className="mt-5">
            {[1, 2, 3].map(v => {
              return (
                <div key={v} className="text-ui_04 flex h-10 w-full items-center justify-between gap-3 px-3">
                  <div className="flex gap-3">
                    <div>{agree ? icons.ENABLE_CHECK : icons.DISABLE_CHECK}</div>
                    <p>이용약관 내용</p>
                  </div>
                  <div>{icons.RIGHT}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 w-full max-w-[410px] px-5">
        <button
          onClick={() => navigate('preparing')}
          className="w-full rounded-lg bg-primary py-4 font-bold text-white"
        >
          다음
        </button>
      </div>
    </>
  );
};

export default UseAgree;
