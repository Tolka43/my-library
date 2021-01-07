const Button = ({ title, onButtonClick }) => (
  <button
    type="button"
    className="btn btn-primary m-1"
    onClick={() => onButtonClick()}
  >
    {title}
  </button>
);

export default Button;
