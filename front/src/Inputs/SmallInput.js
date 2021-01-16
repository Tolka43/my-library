const SmallInput = ({ title, onInputChange, inputValue }) => {
  return (
    <div className="input-group input-group-sm mb-3">
      <span>{title}</span>
      <input
        type="text"
        className="form-control ml-2"
        defaultValue={inputValue}
        onChange={event => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SmallInput;
