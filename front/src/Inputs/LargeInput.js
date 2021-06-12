const LargeInput = ({ title, onInputChange, onButtonClick }) => (
  <div className='input-group mb-3'>
    <span onClick={onButtonClick}>{`${title}:`}</span>
    <input
      type='text'
      className='form-control'
      onChange={event => onInputChange(event.target.value)}
    />
  </div>
);

export default LargeInput;
