const LargeInput = ({ title, onInputChange, onButtonClick }) => (
  <div className='input-group my-2'>
    <span className='m-2' onClick={onButtonClick}>{`${title}:`}</span>
    <input
      type='text'
      className='form-control'
      onChange={event => onInputChange(event.target.value)}
    />
  </div>
);

export default LargeInput;
