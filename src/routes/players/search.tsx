import React, { type ReactElement, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Filters from '../../components/filter';
import { type CanonicalPlayer as Player } from '../../models/player';
import { type CanonicalTeam as Team } from '../../models/team';

const Search: FC = (): ReactElement => {
  const [supplier, setSupplier] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [supplierPlayerId, setSupplierPlayerId] = useState<string>('');
  const [canonicalId, setCanonicalId] = useState<string>('');
  const [teamId, setTeamId] = useState<string>('');
  const [competition, setCompetition] = useState<string>('');

  const navigate = useNavigate();

  // FOR DEVELOPMENT ONLY
  const players: Player[] = [
    {
      playerId: '1234-1234',
      firstName: 'Alan',
      surname: 'Shearer',
      customFullName: '',
      matchName: 'A. Shearer',
      isActive: true,
      nationality: {
        areaCode: 'ENG',
        areaName: 'England',
      },
      birthday: '1980-01-01',
      teams: [
        {
          teamId: '2345-2345',
          name: 'Newcastle',
          code: '',
          area: {
            areaCode: 'ENG',
            areaName: 'England',
          },
          isNational: false,
          teamType: '',
          homeVenue: '',
        },
      ],
    },
    {
      playerId: '9812-1234',
      firstName: 'Cristiano Ronaldo',
      surname: 'dos Santos Aveiro',
      customFullName: 'Cristiano Ronaldo',
      matchName: 'C. Ronaldo',
      isActive: true,
      nationality: {
        areaCode: 'POR',
        areaName: 'Portugal',
      },
      birthday: '1985-02-02',
      teams: [
        {
          teamId: '3456-3466',
          name: 'Al Nassr',
          code: '',
          area: {
            areaCode: 'SA',
            areaName: 'Saudi Arabia',
          },
          isNational: false,
          teamType: '',
          homeVenue: '',
        },
        {
          teamId: '2345-6343',
          name: 'Portugal',
          code: '',
          area: {
            areaCode: 'POR',
            areaName: 'Portugal',
          },
          isNational: true,
          teamType: '',
          homeVenue: '',
        },
      ],
    },
  ];

  return (<>
    <h2>Player Management</h2>
    <h3>Canonical Player Search</h3>

    <div id='filters'>
      <div className='filters-group'>
        <Filters filters={[
          { label: 'Canonical ID', handler: setCanonicalId, value: canonicalId },
        ]} />

        <Filters filters={[
          { label: 'First Name', handler: setFirstName, value: firstName },
          { label: 'Surname', handler: setSurname, value: surname },
        ]} />

        <Filters filters={[
          { label: 'Supplier', handler: setSupplier, value: supplier },
          { label: 'Supplier Player ID', handler: setSupplierPlayerId, value: supplierPlayerId },
        ]} />

        <Filters filters={[
          { label: 'Team ID', handler: setTeamId, value: teamId },
        ]} />

        <Filters filters={[
          { label: 'Competition', handler: setCompetition, value: competition },
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
            <th>First Name</th>
            <th>Surname</th>
            <th>Custom Full Name</th>
            <th>Match Name</th>
            <th>Nationality</th>
            <th>Date of Birth</th>
            <th>Teams</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: Player, key: number) => (
            <tr className='navigation' key={key} onClick={() => { if (player.playerId !== null) navigate(`/players/${player.playerId}`); }}>
              <td>{player.playerId}</td>
              <td>{player.firstName}</td>
              <td>{player.surname}</td>
              <td>{player.customFullName}</td>
              <td>{player.matchName}</td>
              <td>{player.nationality.areaName}</td>
              <td>{player.birthday}</td>
              <td>{(player.teams ?? []).map((team: Team) => team.name).join('; ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>);
};

export default Search;
