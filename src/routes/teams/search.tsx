import React, { type ReactElement, useState, type FC } from 'react';
import Filters from '../../components/filter';
import { useNavigate } from 'react-router-dom';

interface Team {
  teamId: string
  name: string
  customName: string
  code: string
  area: string
  isNational: boolean
  type: string
  homeVenue: string
}

const Search: FC = (): ReactElement => {
  const [name, setName] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [teamType, setTeamType] = useState<string>('');
  const [isNational, setIsNational] = useState<string>('');

  const navigate = useNavigate();

  // FOR DEVELOPMENT ONLY
  const teams: Team[] = [
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
      <div className='filters-group'>
        <Filters filters={[
          { label: 'Name', handler: setName, value: name },
          { label: 'Area', handler: setArea, value: area },
          { label: 'Team Type', handler: setTeamType, value: teamType },
          { label: 'Is National', handler: setIsNational, value: isNational },
        ]} />
      </div>

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
          {teams.map((team: Team, i: number) => (<tr className='navigation' key={i} onClick={() => { navigate(`/teams/${team.teamId}`); }}>
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
