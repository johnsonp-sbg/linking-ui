import React from 'react';

const Details = () => {

    // FOR DEVELOPMENT ONLY
    const team: any = {
        teamId: '6641-9666',
        name: 'Newcastle Jets',
        customName: '',
        code: '',
        area: 'Australia',
        isNational: false,
        type: 'Default',
        homeVenue: '',
        players: [
            {
                playerId: '7772-8811',
                customFullName: 'Bruce Johnson',
            },
            {
                playerId: '8124-9611',
                customFullName: 'James Bruce',
            },
            {
                playerId: '6611-2928',
                customFullName: 'Alan Trout',
            },
        ],
    };

    return (<>
        <h2>Team Management</h2>
        <h3>Team Details</h3>

        <div className='details'>
            <p><span className='heading'>Team ID</span>{team.teamId}</p>
            <p><span className='heading'>Name</span>{team.name}</p>
            <p><span className='heading'>Area</span>{team.area}</p>
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
                    {team.players.map((player: any, i: number) => (<tr>
                        <td>{player.playerId}</td>
                        <td>{player.customFullName}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>);
};

export default Details;