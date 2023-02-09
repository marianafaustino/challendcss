import React from 'react';
import './App.css';
import Carros from './components/Carros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Carros disponíveis para venda:</h1>
      </header>
      <Carros/>
    </div>
  );
}

export default App;
