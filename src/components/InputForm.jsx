import React, { useState } from 'react';

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
            value={depth}
            onChange={(e) => setDepth(parseFloat(e.target.value))}
          />
        </label>
        <br></br>
        <input type="button" value="Calculate!" />
      </form>
    );
  }
  
  export default InputForm;