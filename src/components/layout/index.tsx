import { Outlet } from 'react-router-dom';

import Header from './header';

const LayoutMain = () => {
  return (
    <>
      <Header />
      <div className="my-3"></div>
      <Outlet />
    </>
  );
};

export default LayoutMain;
