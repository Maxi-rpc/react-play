import { lazy } from 'react';

// project imports
import { LayoutMain } from '../components';
import { Loadable } from '../components';

// page routing
const HomePage = Loadable(lazy(() => import('../views/home')));
const PlayPage = Loadable(lazy(() => import('../views/play')));

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
      path: '/play?id',
      element: <PlayPage />,
    },
  ],
};

export default MainRoutes;
