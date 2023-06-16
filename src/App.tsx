import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// import Players from './components/players';
// import Tabs, { Tab } from './components/tabs';
// import Teams from './components/teams';
import Layout from './components/layout';

import Error from './routes/error';
import Root from './routes/root';

import Players from './routes/players';
import Teams from './routes/teams';

import Player from './routes/players/details';
import PlayerSearch from './routes/players/search';
import PlayerSupplierSearch from './routes/players/supplierSearch';
import AddPlayerLink from './routes/players/addLink';

import Team from './routes/teams/details';
import TeamsSearch from './routes/teams/search';

import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '',
          element: <Root />,
        },
        {
          path: '/players',
          element: <Players />,
        },
        {
          path: '/players/search',
          element: <PlayerSearch />,
        },
        {
          path: '/players/search/supplier',
          element: <PlayerSupplierSearch />,
        },
        {
          path: '/players/:id',
          element: <Player />,
        },
        {
          path: '/players/link/add/:id',
          element: <AddPlayerLink />,
        },
        {
          path: '/teams',
          element: <Teams />,
        },
        {
          path: '/teams/search',
          element: <TeamsSearch />,
        },
        {
          path: '/teams/:id',
          element: <Team />,
        },
      ],
    }
  ]);

  return (
    <div className='app'>
      <header>
        <h1>Entity Manager</h1>
      </header>

      <div id='container'>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      {/* <Tabs>
        <Tab title='Players'><Players /></Tab>
        <Tab title='Teams'><Teams /></Tab>
      </Tabs> */}
      </div>
    </div>
  );
}

export default App;
