
const Input = ({ title, onInputChange }) => {

  return (
    <div class="input-group mb-3">
      <span class="input-group-text">{title}</span>
      <input
        type="text"
        class="form-control"
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
