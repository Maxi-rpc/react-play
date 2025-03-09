import { lazy } from 'react';

// project imports
import { LayoutMain } from '../components';
import { Loadable } from '../components';

// page routing
const HomePage = Loadable(lazy(() => import('../views/home')));
const ErrorPage = Loadable(lazy(() => import('../views/error')));
// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: '/',
  element: <LayoutMain />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ],
};

export default MainRoutes;
