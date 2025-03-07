import Header from './header';

interface LayoutMainProps {
  children?: React.ReactNode;
}

const LayoutMain = ({ children }: LayoutMainProps) => {
  return (
    <>
      <Header />
      <div className="my-3"></div>
      {children}
    </>
  );
};

export default LayoutMain;
