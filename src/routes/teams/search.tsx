import React, { useState } from 'react';
import Filters from '../../components/filter';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [name, setName] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [teamType, setTeamType] = useState<string>('');
    const [isNational, setIsNational] = useState<string>('');

    const navigate = useNavigate();

    // FOR DEVELOPMENT ONLY
    const teams: any[] = [
        {
            teamId: '7662-1231',
            name: 'Newcastle United',
            customName: '',
            code: '',
            area: 'England',
            isNational: false,
            type: 'Default',
            homeVenue: '',
        },
        {
            teamId: '6641-9666',
            name: 'Newcastle Jets',
            customName: '',
            code: '',
            area: 'Australia',
            isNational: false,
            type: 'Default',
            homeVenue: '',
        },
        {
            teamId: '0129-3529',
            name: 'Newcastle United',
            customName: 'Newcastle United Women',
            code: '',
            area: 'England',
            isNational: false,
            type: 'Woman',
            homeVenue: '',
        },
        {
            teamId: '1999-3939',
            name: 'Newcastle United Under 21s',
            customName: 'Newcastle United Under 21',
            code: '',
            area: 'England',
            isNational: false,
            type: 'Youth',
            homeVenue: '',
        },
    ];

    return (<>
        <h2>Team Management</h2>
        <h3>Team Search</h3>

        <div id='filters'>
            <Filters filters={[
                { label: 'Name', handler: setName, value: name },
                { label: 'Area', handler: setArea, value: area },
                { label: 'Team Type', handler: setTeamType, value: teamType },
                { label: 'Is National', handler: setIsNational, value: isNational },
             ]} />
            <button>Search</button>
        </div>

        <h3>Results</h3>

        <div id='results'>
            <table>
                <thead>
                    <tr>
                        <th>Canonical ID</th>
                        <th>Name</th>
                        <th>Custom Team Name</th>
                        <th>Area</th>
                        <th>Team Type</th>
                        <th>Is National</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team: any, i: number) => (<tr className='navigation' key={i} onClick={() => navigate(`/teams/${team.teamId}`)}>
                        <td>{team.teamId}</td>
                        <td>{team.name}</td>
                        <td>{team.customName}</td>
                        <td>{team.area}</td>
                        <td>{team.type}</td>
                        <td>{team.isNational ? 'True' : 'False'}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>);
};

export default Search;
