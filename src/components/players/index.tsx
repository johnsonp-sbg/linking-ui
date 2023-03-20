import React, { FC, useEffect, useRef, useState } from 'react';

import Filter from '../filter';

type Player = {
  firstName: string;
  surname: string;
  customName: string;
  active: boolean;
  birthday: string;
  nationality: string;
};

const Players: FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [supplierId, setSupplierId] = useState<string>('');
  const [supplierPlayerId, setSupplierPlayerId] = useState<string>('');
  const [players, setPlayers] = useState<Player[]>([]);

  const timeout = useRef<NodeJS.Timeout>();
  const inputTimeout = 1000;
  const [requestPending, setRequestPending] = useState<boolean>(false);

  const filters = [
    {
      label: 'First Name',
      handler: (value: string) => {
        setSupplierId('');
        setSupplierPlayerId('');
        setFirstName(value);
      },
      value: firstName,
    },
    {
      label: 'Surname',
      handler: (value: string) => {
        setSupplierId('');
        setSupplierPlayerId('');
        setSurname(value);
      },
      value: surname,
    },
    {
      label: 'Supplier ID',
      handler: (value: string) => {
        setFirstName('');
        setSurname('');
        setSupplierId(value);
      },
      value: supplierId,
    },
    {
      label: 'Supplier Player ID',
      handler: (value: string) => {
        setFirstName('');
        setSurname('');
        setSupplierPlayerId(value);
      },
      value: supplierPlayerId,
    },
  ];

  useEffect(() => {
    if (firstName === '' && surname === '' && supplierId === '' && supplierPlayerId === '') {
      return;
    }

    setRequestPending(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(fetchData, inputTimeout);
  }, [firstName, surname, supplierId, supplierPlayerId]);

  const fetchData = () => {
    console.log('fetching data');
    const params = 'firstName=nick';

    fetch(`http://localhost:8080/players?${params}`)
      .then((response) => response.json())
      .then(data => {
        setPlayers(data as Player[]);
        setRequestPending(false);
      })
      .then(() => console.log(players));
  };

  const renderData = () => {
    if (requestPending) {
      return (<p>Fetching data, please wait...</p>);
    }

    if (players.length === 0) {
      return (<p>Currently no data, please update seach criteria...</p>)
    }

    return (<table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Custom Name</th>
          <th>Nationailty</th>
          <th>Birthday</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {!requestPending && players.map((player, index) => (<tr key={index}>
          <td>{player.firstName}</td>
          <td>{player.surname}</td>
          <td>{player.customName}</td>
          <td>{player.nationality}</td>
          <td>{player.birthday}</td>
          <td>{player.active ? 'Y' : 'N'}</td>
          <td><button>Update Links</button></td>
        </tr>))}
      </tbody>
    </table>);
  };

  return (<div id='container'>
    <h2>Player Linking</h2>
    <Filter filters={filters} />

    {renderData()}
  </div>)
};

export default Players;