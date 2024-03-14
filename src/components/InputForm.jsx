import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputForm({ length, setLength, width, setWidth, depth, setDepth }) {
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <form className='formStyle' onSubmit={handleSubmit}>
        <label htmlFor="lengthInput">Length in Feet
          <input
            id="lengthInput"
            name="length"
            type="number"
            min="0"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          /> 
        </label>
        <br></br>
        <label htmlFor="widthInput">Width in Feet
          <input
            id="widthInput"
            name="width"
            type="number"
            min="0"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
          />
        </label>
        <br></br>
        <label htmlFor="depthInput">Depth in Inches
          <input
            id="depthInput"
            name="depth"
            type="number"
            min="0"
            value={depth}
            onChange={(e) => setDepth(parseFloat(e.target.value))}
          />
        </label>
        <br></br>
        <input type="button" value="Calculate!" />
      </form>
    );
  }

  InputForm.propTypes = {
    length: PropTypes.number.isRequired,
    setLength: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    setWidth: PropTypes.func.isRequired,
    depth: PropTypes.number.isRequired,
    setDepth: PropTypes.func.isRequired,
  };
  
  export default InputForm;