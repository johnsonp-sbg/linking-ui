import React, { type FC, type ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: FC = (): ReactElement => {
  return (<>
    <div id='sidebar'>
      <ul>
        <li>
          <Link to='/players'>Players</Link>
          <ul>
            <li><Link to ='/players/search'>Search</Link></li>
            <li><Link to ='/players/search/supplier'>Supplier Search</Link></li>
          </ul>
        </li>
        <li>
          <Link to='/teams'>Teams</Link>
          <ul>
            <li><Link to ='/teams/search'>Search</Link></li>
          </ul>
        </li>
      </ul>
    </div>

    <div id='content'>
      <Outlet />
    </div>
  </>);
};

export default Layout;
