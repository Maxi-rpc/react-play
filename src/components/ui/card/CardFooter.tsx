interface CardFooterProps {
  children?: React.ReactNode;
}

const CardFooter = (props: CardFooterProps) => {
  return (
    <>
      <div className="flex flex-col p-4 xl:p-8">
        <div className="flex justify-end">{props.children}</div>
      </div>
    </>
  );
};

export default CardFooter;
