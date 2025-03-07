import { lazy } from 'react';

// project imports
import { LayoutMain } from '../components';
import { Loadable } from '../components';

// page routing
const HomePage = Loadable(lazy(() => import('../views/home')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <LayoutMain />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    }
  ],
};

export default MainRoutes;
