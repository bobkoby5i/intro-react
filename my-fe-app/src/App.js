import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

const testButtonOnClick = () => {
  axios.get('/api/items').then(resp => console.log('OK: ', resp), error => console.log('Error', error))
  console.log('test click')
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => testButtonOnClick()}>Get Items from Warehouse</button>
      </header>
    </div>
  );
}

export default App;
