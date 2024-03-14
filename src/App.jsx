import React from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import useCalculateMulch from './hooks/useCalculateMulch';

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
