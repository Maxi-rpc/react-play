interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="flex flex-col rounded-2xl w-full bg-[#ffffff] shadow-xl">{children}</div>
    </>
  );
};

export default Card;
