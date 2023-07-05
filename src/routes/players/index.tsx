import React, { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Players: FC = (): ReactElement => {
  return (<>
    <h2>Player Management</h2>

    <ul className='sub-nav'>
      <li><Link to ='/players/search'>Canonical Player Search</Link></li>
      <li><Link to ='/players/search/supplier'>Player Search by Supplier</Link></li>
    </ul>
  </>);
};

export default Players;
