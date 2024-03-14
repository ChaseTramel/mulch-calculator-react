import React, { useState } from 'react';

function InputForm({ length, setLength, width, setWidth, depth, setDepth }) {
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Length in Feet</label>
        <br></br>
        <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
        /> 
        <br></br>
        <label>Width in Feet</label>
        <br></br>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value))}
        />
        <br></br>
        <label>Depth in Inches</label>
        <br></br>
        <input
          type="number"
          value={depth}
          onChange={(e) => setDepth(parseFloat(e.target.value))}
        />
        <br></br>
        <button type="submit">Calculate!</button>
      </form>
    );
  }
  
  export default InputForm;