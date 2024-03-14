import React, { useState } from 'react';
import InputForm from './InputForm';
import EditForm from './EditForm';

function CalculatorForm() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);

  const [bagSize, setBagSize] = useState(0.5); 
  const [bagPrice, setBagPrice] = useState(10.99); 
  
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div>
      <InputForm
        length={length}
        setLength={setLength}
        width={width}
        setWidth={setWidth}
        depth={depth}
        setDepth={setDepth}
        bagSize={bagSize} 
        bagPrice={bagPrice}
      />
      <a href="#" id="editLink" onClick={() => setShowEditForm(prevState => !prevState)}>
        Click here to edit Mulch Details.
        </a>
      {showEditForm && < EditForm 
        bagSize={bagSize} 
        setBagSize={setBagSize} 
        bagPrice={bagPrice} 
        setBagPrice={setBagPrice} 
        setShowEditForm={setShowEditForm}
      />}
    </div>
  );
}

export default CalculatorForm;
