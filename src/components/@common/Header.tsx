import { MouseEventHandler, ReactNode } from 'react';

interface IHeaderProp {
  left?: ReactNode | string;
  center?: string;
  right?: ReactNode;
  left_func?: MouseEventHandler<HTMLDivElement>;
  right_func?: MouseEventHandler<HTMLDivElement>;
}

const Header = ({ left, center, right, left_func, right_func }: IHeaderProp) => {
  return (
    <header className="fixed top-0 z-50 flex h-12 w-full max-w-[410px] items-center justify-between px-5 text-center font-bold">
      {left ? (
        <div onClick={left_func} className="text-primary">
          {left}
        </div>
      ) : (
        <div className="invisible w-6" />
      )}
      {center && <p className="text-base font-semibold">{center}</p>}
      {right ? <div onClick={right_func}>{right}</div> : <div className="invisible w-6" />}
    </header>
  );
};

export default Header;
