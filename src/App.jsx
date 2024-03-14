import React from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import './App.css';

function App() {

  return (
    <div className="app">
      <h1>Mulch Calculator</h1>
      <CalculatorForm />
      <ResultsDisplay  />
    </div>
  );
}

export default App;
