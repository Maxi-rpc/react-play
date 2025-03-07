interface CardTitleProps {
  children?: React.ReactNode;
  title?: string;
}

const CardTitle = ({ children, title }: CardTitleProps) => {
  return (
    <>
      <div className="text-lg font-bold text-[#374151] capitalize pb-6">
        {title ? title : 'Titulo demo'}
        {children && children}
      </div>
    </>
  );
};

export default CardTitle;
