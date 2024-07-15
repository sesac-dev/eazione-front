import notification from '@/assets/icons/notification.png';

const Header = () => {
  return (
    <header className="flex h-12 items-center justify-between px-5">
      <div>
        <p className="font-bold">Logo</p>
      </div>
      <img src={notification} className="h-6 w-6"></img>
    </header>
  );
};

export default Header;
