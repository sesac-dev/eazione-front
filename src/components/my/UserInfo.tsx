import { icons } from '@/constants/icons';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-3 pt-10">
        <p className="text-[22px]">
          <span className="font-bold">김수지</span>님
        </p>
        {icons.MY_RIGHT}
      </div>
      <div className="flex flex-col gap-3 py-8">
        <p className="pb-2 text-left text-lg font-bold">등록한 신분증</p>
        <div className="flex items-center gap-5 rounded-lg bg-ui_12 p-3">
          <p>여권</p>
          <p className="text-[13px] text-ui_08">등록된 여권이 없습니다</p>
        </div>
        <div className="flex items-center gap-5 rounded-lg bg-ui_12 p-3">
          <p>외국인 등록증</p>
          <p className="text-[13px] text-ui_08">등록된 외국인 등록증이 없습니다</p>
        </div>
      </div>
      <div>
        <p className="pb-2 text-left text-lg font-bold">마이 문서함</p>
        <div onClick={() => navigate('docs')} className="flex items-center gap-5 rounded-lg bg-ui_12 p-3">
          <p>저장한 문서</p>
          <p className="text-[13px] text-ui_08">등록된 외국인 등록증이 없습니다</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
