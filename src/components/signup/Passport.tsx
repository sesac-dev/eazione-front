import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Passport = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState<string>('');

  return (
    <>
      <div className="flex h-full flex-col gap-5 overflow-y-scroll text-sm">
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">신분증 유형</p>
          <p className="w-full border-b pb-1 text-lg">여권</p>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">이름</p>
          <div className="flex gap-5">
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Surname"></input>
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Given Names"></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">생년월일</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Date of Birth"></input>
        </div>
        <div className="flex gap-10">
          <div className="flex w-full flex-col gap-3">
            <p className="text-ui_06">성별</p>
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Sex"></input>
          </div>
          <div className="flex w-full flex-col gap-3">
            <p className="text-ui_06">국적</p>
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Nationality"></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">여권 만료일</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1 text-ui_06">{date ? date : 'Date of Issue'}</p>
            <input
              type="date"
              required
              value={date}
              onChange={e => setDate(e.target.value)}
              className="border-b px-1 pb-1 outline-none"
            ></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">여권 발급국</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Country of Issue"></input>
        </div>
        <div className="flex gap-5 pb-5 pt-7">
          <button
            onClick={() => navigate('/signup/shooting')}
            className="w-full rounded-lg bg-ui_10 py-4 font-bold text-ui_01"
          >
            다시 촬영하기
          </button>
          <button
            onClick={() => navigate('preparing')}
            className="w-full rounded-lg bg-primary py-4 font-bold text-white"
          >
            인증완료
          </button>
        </div>
      </div>
    </>
  );
};
export default Passport;
