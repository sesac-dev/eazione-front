interface ITailButtonProps {
  content: string;
  clickEvent: () => void;
}

const TailButton = ({ content, clickEvent }: ITailButtonProps) => {
  return (
    <>
      <div
        onClick={clickEvent}
        className="bg-primary ml-[30px] flex w-full items-center justify-center rounded-md py-3 font-bold text-white"
      >
        <p>{content}</p>
      </div>
    </>
  );
};

export default TailButton;
