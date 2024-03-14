import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import useCalculateMulch from './hooks/useCalculateMulch';
import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  
  const [bagSize, setBagSize] = useState(0.5); 
  const [bagPrice, setBagPrice] = useState(10.99); 

  const result = useCalculateMulch(length, width, depth, bagSize, bagPrice);

  const [showResults, setShowResults] = useState(false);

  return (
    <div className="app">
      <h1>Mulch Calculator</h1>
      <CalculatorForm 
        length={length}
        setLength={setLength}
        width={width}
        setWidth={setWidth}
        depth={depth}
        setDepth={setDepth}
        bagSize={bagSize}
        setBagSize={setBagSize}
        bagPrice={bagPrice}
        setBagPrice={setBagPrice}
        setShowResults={setShowResults}
      />
      {showResults && <ResultsDisplay 
        result={result} 
        length={length} 
        width={width} 
        depth={depth}
        bagSize={bagSize}
        bagPrice={bagPrice}
      />}
    </div>
  );
}

export default App;