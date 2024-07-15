const ChatInfo = () => {
  return (
    <>
      <h1 className="pt-20 text-xl font-bold">#서비스명#에 무엇이든 질문해 보세요.</h1>
      <div className="flex flex-col gap-5 px-5">
        <p className="pt-10 text-lg">이런 것들을 질문할 수 있어요</p>
        <div className="rounded-full bg-[#F5F5F5] p-3 text-sm text-[#9E9E9E]">
          <p>외국인도 참여할 수 있는 지원 프로그램 알려줘!</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] p-3 text-sm text-[#9E9E9E]">
          <p>외국인 의료 지원 사업을 실시하는 기관 알려줘!</p>
        </div>
        <div className="rounded-full bg-[#F5F5F5] p-3 text-sm text-[#9E9E9E]">
          <p>공공 서비스 방문 시 지참해야할 것들 알려줘!</p>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
