import React, { type ReactElement, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Filters from '../../components/filter';
import { type SupplierPlayer as Player } from '../../models/player';

const SupplierSearch: FC = (): ReactElement => {
  const [supplier, setSupplier] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [supplierPlayerId, setSupplierPlayerId] = useState<string>('');
  const [canonicalId, setCanonicalId] = useState<string>('');

  const navigate = useNavigate();

  // FOR DEVELOPMENT ONLY
  const players: Player[] = [
    {
      supplier: {
        supplierName: 'BetRadar',
        supplierId: 1,
      },
      supplierPlayerId: '9993',
      canonicalPlayerId: '1512-3211',
      supplierFirstName: 'Cristiano',
      supplierSurname: 'Ronaldo',
      supplierBirthday: '1985-02-02',
      isConfirmed: true,
      canonicalPlayerFirstName: 'Cristiano',
      canonicalPlayerSurname: 'Ronaldo',
    },
    {
      supplier: {
        supplierName: 'TXOdds',
        supplierId: 2,
      },
      supplierPlayerId: '12939',
      canonicalPlayerId: '',
      supplierFirstName: 'Cristiano',
      supplierSurname: 'Ronaldo',
      supplierBirthday: '1985-02-02',
      isConfirmed: true,
      canonicalPlayerFirstName: 'Cristiano',
      canonicalPlayerSurname: 'Ronaldo',
    },
  ];

  return (<>
    <h2>Player Management</h2>
    <h3>Supplier Player Search</h3>

    <div id='filters'>
      <div className='filters-group'>
        <Filters filters={[
          { label: 'Supplier', handler: setSupplier, value: supplier },
        ]} />
        <Filters filters={[
          { label: 'First Name', handler: setFirstName, value: firstName },
          { label: 'Surname', handler: setSurname, value: surname },
        ]} id='supplier' />
        <Filters filters={[
          { label: 'Supplier Player ID', handler: setSupplierPlayerId, value: supplierPlayerId },
        ]} />
        <Filters filters={[
          { label: 'Linked to Canonical ID', handler: setCanonicalId, value: canonicalId },
        ]} />
      </div>

      <button>Search</button>
    </div>

    <h3>Results</h3>

    <div id='results'>
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Supplier Player ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Currently Linked To</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: Player, key: number) => {
            return (<tr className='navigation' key={key} onClick={() => { if (player.supplierPlayerId !== null) navigate(`/players/${player.supplierPlayerId}`); }}>
              <td>{player.supplier.supplierName}</td>
              <td>{player.supplierPlayerId}</td>
              <td>{player.canonicalPlayerFirstName}</td>
              <td>{player.canonicalPlayerSurname}</td>
              <td>{player.supplierPlayerId} {player.canonicalPlayerFirstName} {player.canonicalPlayerSurname}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  </>);
};

export default SupplierSearch;
