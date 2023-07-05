import React, { type FC, type ReactElement } from 'react';

const AddPlayerLink: FC = (): ReactElement => {
  return (<>
    <h2>Player Management</h2>
    <h3>Add Supplier Player Link</h3>

    <div id='identifier'>
      <p><span className='heading'>Player ID</span></p>
    </div>

    <div id='info'>
      <p><span className='heading'>First Name</span></p>
      <p><span className='heading'>Surname</span></p>
    </div>

    <div id='filters'>

      <button className='action'>Search</button>
    </div>

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
      </table>
    </div>
  </>);
};

export default AddPlayerLink;
