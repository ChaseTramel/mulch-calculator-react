import PropTypes from 'prop-types';

function InputForm({ length, setLength, width, setWidth, depth, setDepth, bagSize, bagPrice, setShowResults }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      setShowResults(true);
      console.log(`Length: ${length}, Width: ${width}, Depth: ${depth}, Bag Size: ${bagSize}, Bag Price ${bagPrice}`);
    };
  
    return (
      <>
        <h2>Area To Cover with Mulch</h2>
        <form className='formStyle' onSubmit={handleSubmit}>
          <label htmlFor="lengthInput">Length in Feet
            <input
              id="lengthInput"
              name="length"
              type="number"
              min="0"
              step="1"
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
              step="1"
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
              step="0.25"
              value={depth}
              onChange={(e) => setDepth(parseFloat(e.target.value))}
            />
          </label>
          <br></br>
          <input type="submit" value="Calculate Mulch Needs" />
        </form>
      </>
    );
  }

  InputForm.propTypes = {
    length: PropTypes.number.isRequired,
    setLength: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    setWidth: PropTypes.func.isRequired,
    depth: PropTypes.number.isRequired,
    setDepth: PropTypes.func.isRequired,
    bagSize: PropTypes.number.isRequired,
    bagPrice: PropTypes.number.isRequired,
    setShowResults: PropTypes.func.isRequired
  };
  
  export default InputForm;