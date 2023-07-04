import React from 'react';
import { Link } from 'react-router-dom';

const Players = () => {
    return (<>
        <h2>Player Management</h2>

        <ul className='sub-nav'>
            <li><Link to ='/players/search'>Canonical Player Search</Link></li>
            <li><Link to ='/players/search/supplier'>Player Search by Supplier</Link></li>
        </ul>
    </>);
};

export default Players;
