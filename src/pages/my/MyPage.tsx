import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';

const MyPage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header center="마이 페이지" />
        <div className="h-[calc(100vh-176px)] w-full pt-12 text-center"></div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default MyPage;
