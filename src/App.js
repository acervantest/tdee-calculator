import React from 'react';

import Calculator from './components/calculator/Calculator'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>TDEE Calculator</h4> 
      </header>  
      <Calculator/>
    </div>
  );
}

export default App;
