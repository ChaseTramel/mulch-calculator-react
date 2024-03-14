import React, { useState } from 'react';
import InputForm from './InputForm';

function CalculatorForm() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  

  return (
    <div>
      <InputForm
        length={length}
        setLength={setLength}
        width={width}
        setWidth={setWidth}
        depth={depth}
        setDepth={setDepth}
      />
    </div>
  );
}

export default CalculatorForm;
