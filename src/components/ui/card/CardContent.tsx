interface CardContentProps {
  children?: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return (
    <>
      <div className="flex flex-col p-4 xl:p-8">
        {children}
        {/* <div className=" text-sm   text-[#374151]">
          Leverage a graphical editor to create, design and customize beautiful web components.
        </div> */}
      </div>
    </>
  );
};

export default CardContent;
