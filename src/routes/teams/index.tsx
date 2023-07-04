import React from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {
    return (<>
        <h2>Team Management</h2>

        <ul className='sub-nav'>
            <li><Link to ='/teams/search'>Canonical Team Search</Link></li>
        </ul>
    </>);
};

export default Teams;
