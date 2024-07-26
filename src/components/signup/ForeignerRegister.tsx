import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const ForeignerRegister = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState<string>('');

  return (
    <>
      <div className="flex h-full flex-col gap-5 overflow-y-scroll text-sm">
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">신분증 유형</p>
          <p className="w-full border-b pb-1 text-lg">외국인 등록증</p>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">외국인 등록번호</p>
          <input
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="Alien Registration Number"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">생년월일</p>
          <input
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="First 6 digits of alien registration number"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">성별</p>
          <input
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="First digit of alien registration number"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">성명</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Name"></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">국가/지역</p>
          <div className="flex gap-5">
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Country"></input>
            <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Region"></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">체류 자격</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Status"></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">허가일자</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1 text-ui_06">{date ? date : 'Permission date'}</p>
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
          <p className="text-ui_06">만료일자</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1 text-ui_06">{date ? date : 'Expiration date'}</p>
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
          <p className="text-ui_06">확인</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="Region"></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">신고일</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1 text-ui_06">{date ? date : 'Report date'}</p>
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
          <p className="text-ui_06">체류지</p>
          <input type="text" className="w-full border-b px-1 pb-1 outline-none" placeholder="address"></input>
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

export default ForeignerRegister;
