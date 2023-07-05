import React, { type FC, type ReactElement } from 'react';
import { type CanonicalTeam as Team } from '../../models/team';

const Details: FC = (): ReactElement => {
  // FOR DEVELOPMENT ONLY
  const team: Team = {
    teamId: '6641-9666',
    name: 'Newcastle Jets',
    code: '',
    area: {
      areaCode: '',
      areaId: '',
      areaName: 'Australia',
    },
    isNational: false,
    teamType: 'Default',
    homeVenue: '',
    players: [
      {
        playerId: '7772-8811',
        matchName: 'Bruce Johnson',
        surname: '',
        isActive: true,
        nationality: {},
      },
      {
        playerId: '8124-9611',
        matchName: 'James Bruce',
        surname: '',
        isActive: true,
        nationality: {},
      },
      {
        playerId: '6611-2928',
        matchName: 'Alan Trout',
        surname: '',
        isActive: true,
        nationality: {},
      },
    ],
  };

  return (<>
    <h2>Team Management</h2>
    <h3>Team Details</h3>

    <div className='details'>
      <p><span className='heading'>Team ID</span>{team.teamId}</p>
      <p><span className='heading'>Name</span>{team.name}</p>
      <p><span className='heading'>Area</span>{team.area.areaName}</p>
    </div>

    <div id='players'>
      <table>
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {(team.players ?? []).map((player: any, key: number) => (<tr key={key}>
            <td>{player.playerId}</td>
            <td>{player.customFullName}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </>);
};

export default Details;
