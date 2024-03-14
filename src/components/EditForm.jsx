function EditForm({ bagSize, setBagSize, bagPrice, setBagPrice, setShowEditForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEditForm(false);
  };
  
  return (
    <>
      <h2>Edit Mulch Details</h2>
      <form className='formStyle' onSubmit={handleSubmit}>
        <label htmlFor="bagSize">Bag Size in Cubic Yards
          <input
            type="number"
            id="bagSize"
            value={bagSize}
            onChange={(e) => setBagSize(parseFloat(e.target.value))}
            min="0"
            step="0.1"
          />
        </label>
        <br></br>
        <label htmlFor="bagPrice">Bag Price in USD
          <input
            type="number"
            id="bagPrice"
            value={bagPrice}
            onChange={(e) => setBagPrice(parseFloat(e.target.value))}
            step="0.01"
            min="0"
          />
        </label>
        <br></br>
        <input type="submit" value="Update Mulch Details" />
      </form>
    </>
  );
}

export default EditForm;
