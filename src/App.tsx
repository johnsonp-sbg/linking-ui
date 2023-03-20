import React from 'react';

import Players from './components/players';
import Tabs, { Tab } from './components/tabs';
import Teams from './components/teams';

import './App.css';

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Linking Service</h1>
      </header>

      <Tabs>
        <Tab title='Players'><Players /></Tab>
        <Tab title='Teams'><Teams /></Tab>
    </Tabs>
    </div>
  );
}

export default App;
