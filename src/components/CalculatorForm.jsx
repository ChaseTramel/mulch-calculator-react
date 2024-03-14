import React, { useState } from 'react';
import InputForm from './InputForm';
import EditForm from './EditForm';
import PropTypes from 'prop-types';

function CalculatorForm({ length, setLength, width, setWidth, depth, setDepth, bagSize, setBagSize, bagPrice, setBagPrice, setShowResults}) {
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
        setShowResults={setShowResults}
      />
      <a href="#" id="editLink" onClick={() => {
        setShowEditForm(prevState => !prevState);
        setShowResults(false);
      }}>
        Click here to edit Mulch Details.
      </a>
      {showEditForm && < EditForm 
        bagSize={bagSize} 
        setBagSize={setBagSize} 
        bagPrice={bagPrice} 
        setBagPrice={setBagPrice} 
        setShowEditForm={setShowEditForm}
        setShowResults={setShowResults}
      />}
    </div>
  );
}

CalculatorForm.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  setWidth: PropTypes.func.isRequired,
  depth: PropTypes.number.isRequired,
  setDepth: PropTypes.func.isRequired,
  bagSize: PropTypes.number.isRequired,
  setBagSize: PropTypes.func.isRequired,
  bagPrice: PropTypes.number.isRequired,
  setBagPrice: PropTypes.func.isRequired,
  setShowResults: PropTypes.func.isRequired
};


export default CalculatorForm;
