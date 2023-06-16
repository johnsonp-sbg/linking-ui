import React from 'react';
import { Link } from 'react-router-dom';

const RootPath = () => {
    return (<div>
        <div id='player'>
            <h2>Players</h2>
            <ul>
                <li><Link to='/players/search'>Search</Link></li>
                <li><Link to='/players/search/supplier'>Supplier Search</Link></li>
            </ul>
        </div>
        <div id='team'>
            <h2>Teams</h2>
            <ul>
                <li><Link to='/teams/search'>Search</Link></li>
            </ul>
        </div>
    </div>);
};

export default RootPath;