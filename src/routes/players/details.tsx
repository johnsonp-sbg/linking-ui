import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details: FC = () => {
    const { id } = useParams();
    const [edited, setEdited] = useState<boolean>(false);

    const navigate = useNavigate();

    // FOR DEVELOPMENT ONLY
    const suppliers: any[] = [
        {
            supplier: 'Opta',
            supplierPlayerId: '9993',
            firstName: 'Cristiano',
            surname: 'Ronaldo',
            birthday: '1985-02-02',
        },
        {
            supplier: 'TXOdds',
            supplierPlayerId: '12939',
            firstName: 'Chris',
            surname: 'Ronaldo',
            birthday: null,
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
                        onChange={() => setEdited(true)}
                        placeholder='Custom Full Name'/>
                </div>
            </form>
            <button
                className='action'
                disabled={!edited}
                onClick={() => setEdited(false)}>
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
                    {suppliers.map((supplier: any, i: number) => (<tr>
                        <td>{supplier.supplier}</td>
                        <td>{supplier.supplierPlayerId}</td>
                        <td>{supplier.firstName}</td>
                        <td>{supplier.surname}</td>
                        <td>{supplier.birthday}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>))}
                </tbody>
            </table>

            <button onClick={() => navigate(`/players/link/add/${id}`)}>Add Link</button>
        </div>
    </>);
};

export default Details;