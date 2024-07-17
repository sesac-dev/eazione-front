interface ITailButtonProps {
  content: string;
  clickEvent: () => void;
}

const TailButton = ({ content, clickEvent }: ITailButtonProps) => {
  return (
    <>
      <div
        onClick={clickEvent}
        className="flex w-3/5 items-center justify-center rounded-md bg-[#878787] py-3 font-bold text-white"
      >
        <p>{content}</p>
      </div>
    </>
  );
};

export default TailButton;
