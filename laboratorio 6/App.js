import logo from './logo.svg';
import './App.css';
import React from 'react';
import Componentes from './Componentes';
import MasComponentes from './MasComponentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
          Experiencias practicas.
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
      <Componentes curso="Desarrollo de Aplicaciones"/>
      <MasComponentes datos="Practicas"/>
    </div>
  );
}
export default App;
