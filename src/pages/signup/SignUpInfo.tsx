import { useNavigate } from 'react-router-dom';
import Header from '../../components/@common/Header';
import { icons } from '../../constants/icons';

const SignUpInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header left={icons.BACK} left_func={() => navigate(-1)} />
      <div className="h-full w-full px-5 pt-12">
        <div className="flex h-full w-full flex-col gap-10">
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-xl font-bold">
              고객님의 정보가 올바르게 <br /> 기입되었는지 한번 더 확인 해주세요.
            </h1>
            <p className="text-sm text-[#ADADAD]">
              인식된 정보를 한번 더 확인해 주세요. 신분증 정보와 다른 경우 다시 촬영하거나 정보를 수정해 주세요.
            </p>
          </div>
          <div className="flex h-full flex-col gap-5 overflow-y-scroll text-sm text-ui_06">
            <div className="flex w-full flex-col gap-3">
              <p>외국인 등록번호</p>
              <input
                type="text"
                className="w-full border-b pb-2 outline-none"
                placeholder="Alien Registration Number"
              ></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>생년월일</p>
              <input
                type="text"
                className="w-full border-b pb-2 outline-none"
                placeholder="외국인 등록번호 앞번호"
              ></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>성별</p>
              <input
                type="text"
                className="w-full border-b pb-2 outline-none"
                placeholder="외국인 등록번호 맨 앞숫자"
              ></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>국가/지역</p>
              <div className="flex gap-5">
                <input type="text" className="w-full border-b pb-2 outline-none" placeholder="Country"></input>
                <input type="text" className="w-full border-b pb-2 outline-none" placeholder="Region"></input>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>체류 자격</p>
              <input type="text" className="w-full border-b pb-2 outline-none" placeholder="Status"></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>체류 기간</p>
              <input type="text" className="w-full border-b pb-2 outline-none" placeholder="Duration of Stay"></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>체류지</p>
              <input type="text" className="w-full border-b pb-2 outline-none" placeholder="Duration of Stay"></input>
            </div>
            <div className="flex w-full flex-col gap-3">
              <p>연락처</p>
              <div className="flex gap-5">
                <input type="text" className="w-16 border-b pb-2 outline-none" placeholder="전화번호"></input>
                <input type="text" className="w-full border-b pb-2 outline-none" placeholder="직접입력"></input>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default SignUpInfo;
