import logo from '@/assets/logo.png';

const ChatInfo = () => {
  return (
    <>
      <div className="flex items-center justify-center py-10">
        <img src={logo}></img>
      </div>
      <h1 className="text-xl font-bold">EZ ONE에게 이렇게 질문해 보세요.</h1>
      <div className="flex flex-col gap-5 px-5 text-sm font-bold">
        <p className="pt-10 text-[#424242]">이런 것들을 질문할 수 있어요</p>
        <div className="rounded-xl bg-tint_01 p-3 text-shade_03">
          <p>외국인등록증 신청하고 싶어!</p>
        </div>
        <div className="rounded-xl bg-tint_01 p-3 text-shade_03">
          <p>이사 후 해야할 것들을 알려줘!</p>
        </div>
        <div className="rounded-xl bg-tint_01 p-3 text-shade_03">
          <p>서류 작성 도와줘!</p>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
