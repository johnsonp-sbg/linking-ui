import React, { type FC, type ReactElement, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type SupplierPlayer } from '../../models/player';

const Details: FC = (): ReactElement => {
  const { id } = useParams();
  const [edited, setEdited] = useState<boolean>(false);

  const navigate = useNavigate();

  if (id === null) {
    return (<>
      <h2>Player Management</h2>
      <h3>Player Details</h3>
      <p>Unable to find player!</p>
    </>);
  }

  // FOR DEVELOPMENT ONLY
  const supplierList: SupplierPlayer[] = [
    {
      supplier: {
        supplierName: 'Opta',
        supplierId: 1,
      },
      supplierPlayerId: '9993',
      canonicalPlayerId: '9993',
      canonicalPlayerFirstName: 'Cristiano',
      canonicalPlayerSurname: 'Ronaldo',
      supplierSurname: 'Ronaldo',
      supplierBirthday: '1985-02-02',
      isConfirmed: true,
    },
    {
      supplier: {
        supplierName: 'TXOdds',
        supplierId: 2,
      },
      supplierPlayerId: '12939',
      canonicalPlayerId: '12939',
      canonicalPlayerFirstName: 'Chris',
      canonicalPlayerSurname: 'Ronaldo',
      supplierSurname: 'Ronaldo',
      isConfirmed: true,
    },
  ];

  return (<>
    <h2>Player Management</h2>
    <h3>Player Details</h3>

    <div className='details'>
      <p><span className='heading'>Player ID</span></p>
      <p><span className='heading'>First Name</span></p>
      <p><span className='heading'>Surname</span></p>
    </div>

    <div id='custom-name-container'>
      <form>
        <div>
          <label htmlFor='name'>Custom Full Name</label>
          <input
            id='name'
            name='name'
            onChange={() => { setEdited(true); }}
            placeholder='Custom Full Name'/>
        </div>
      </form>
      <button
        className='action'
        disabled={!edited}
        onClick={() => { setEdited(false); }}>
                    Edit
      </button>
    </div>

    <div id='player-links'>
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Supplier Player ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {supplierList.map((sp: SupplierPlayer, key: number) => (<tr key={key}>
            <td>{sp.supplier.supplierName}</td>
            <td>{sp.supplierPlayerId}</td>
            <td>{sp.supplierFirstName}</td>
            <td>{sp.supplierSurname}</td>
            <td>{sp.supplierBirthday}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>))}
        </tbody>
      </table>

      <button onClick={() => { navigate(`/players/link/add/${id}`); }}>Add Link</button>
    </div>
  </>);
};

export default Details;
