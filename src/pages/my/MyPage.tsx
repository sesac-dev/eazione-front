import BottomNavigation from '@/components/@common/BottomNavigation';
import Header from '@/components/@common/Header';
import UserInfo from '@/components/my/UserInfo';

const MyPage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header center="마이 페이지" />
        <div className="h-[calc(100vh-150px)] w-full px-5 pt-12 text-center">
          <UserInfo />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default MyPage;
