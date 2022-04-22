import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { OfficesService } from './services';

function App() {
  const officesService = new OfficesService();

  useEffect(() => {
    const getOffices = async () => {
      const offices = await officesService.getAll();
      console.log(offices);
    }
    getOffices();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
