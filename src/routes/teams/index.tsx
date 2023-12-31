import React, { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Teams: FC = (): ReactElement => {
  return (<>
    <h2>Team Management</h2>

    <ul className='sub-nav'>
      <li><Link to ='/teams/search'>Canonical Team Search</Link></li>
    </ul>
  </>);
};

export default Teams;
