import BottomNavigation from '../../components/@common/BottomNavigation';
import Header from '../../components/@common/Header';

const MyPage = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header center="마이 페이지" />
        <div className="h-[calc(100vh-176px)] w-full pt-12 text-center"></div>
      </div>
      <footer className="fixed bottom-0 h-28 w-full max-w-[410px] bg-white pt-3 shadow-top">
        <BottomNavigation />
      </footer>
    </>
  );
};

export default MyPage;
