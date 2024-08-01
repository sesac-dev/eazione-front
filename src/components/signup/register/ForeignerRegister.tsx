import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '@/hooks/@common/useInput';
import { IIdentityCard } from '@/types';

const ForeignerRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [values, changer] = useInput<IIdentityCard>(
    {
      foreignNumber: !location.state.docsType ? location.state.data.foreignNumber : '',
      name: !location.state.docsType ? location.state.data.name : '',
      country: !location.state.docsType ? location.state.data.country : '',
      status: !location.state.docsType ? location.state.data.status : '',
      issueDate: !location.state.docsType ? location.state.data.issueDate : '',
      startDateOfStay: !location.state.docsType ? location.state.data.startDateOfStay : '',
      endDateOfStay: !location.state.docsType ? location.state.data.endDateOfStay : '',
      address: !location.state.docsType ? location.state.data.address : '',
      reportDate: !location.state.docsType ? location.state.data.reportDate : '',
    },
    true,
    'idCard',
  );

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
            value={values.foreignNumber}
            onChange={changer}
            name="foreignNumber"
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="Alien Registration Number"
          ></input>
        </div>

        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">성명</p>
          <input
            value={values.name}
            onChange={changer}
            name="name"
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="Name"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">국가</p>
          <input
            value={values.country}
            onChange={changer}
            name="country"
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="Country"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">체류 자격</p>
          <input
            value={values.status}
            onChange={changer}
            name="status"
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="Status"
          ></input>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">허가일자</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1">
              {values.startDateOfStay ? values.startDateOfStay : 'Permission date'}
            </p>
            <input
              value={values.startDateOfStay}
              onChange={changer}
              name="startDateOfStay"
              type="date"
              className="border-b px-1 pb-1 outline-none"
            ></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">만료일자</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1">
              {values.endDateOfStay ? values.endDateOfStay : 'Expiration date'}
            </p>
            <input
              value={values.endDateOfStay}
              onChange={changer}
              name="endDateOfStay"
              type="date"
              className="border-b px-1 pb-1 outline-none"
            ></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">신고일</p>
          <div className="flex">
            <p className="flex-1 border-b px-1 pb-1">{values.reportDate ? values.reportDate : 'Report date'}</p>
            <input
              value={values.reportDate}
              onChange={changer}
              name="reportDate"
              type="date"
              className="border-b px-1 pb-1 outline-none"
            ></input>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <p className="text-ui_06">체류지</p>
          <input
            value={values.address}
            onChange={changer}
            name="address"
            type="text"
            className="w-full border-b px-1 pb-1 outline-none"
            placeholder="address"
          ></input>
        </div>

        <div className="flex gap-5 pb-5 pt-7">
          <button
            onClick={() =>
              navigate('/signup/shooting', {
                state: {
                  docsType: 'IdCard',
                },
              })
            }
            className="w-full rounded-lg bg-ui_10 py-4 font-bold text-ui_01"
          >
            다시 촬영하기
          </button>
          <button onClick={() => navigate('/my')} className="w-full rounded-lg bg-primary py-4 font-bold text-white">
            인증완료
          </button>
        </div>
      </div>
    </>
  );
};

export default ForeignerRegister;
