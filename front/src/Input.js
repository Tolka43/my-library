
const Input = ({ title, onInputChange }) => {

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{title}</span>
      <input
        type="text"
        className="form-control"
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
