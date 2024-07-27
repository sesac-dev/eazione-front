import BottomNavigation from '@/components/@common/BottomNavigation';
import Header from '@/components/@common/Header';
import { icons } from '@/constants/icons';
import docs from '@/assets/image/docs.png';
import { useNavigate } from 'react-router-dom';

const DocsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-full">
        <Header left={icons.BACK} center="마이 문서함" left_func={() => navigate(-1)} />
        <div className="h-[calc(100vh-60px)] w-full px-5 pb-10 pt-20 text-center">
          <div className="grid h-full grid-flow-row grid-cols-3 gap-3 overflow-y-auto">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((value, index) => {
              return (
                <div className="flex flex-col items-center justify-center gap-2 py-3 text-sm text-ui_01">
                  <img src={docs} />
                  <p>저장한 문서명</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default DocsPage;
