const Button = ({ title, onButtonClick, buttonStyle }) => (
  <button
    type="button"
    className={`btn ${buttonStyle} m-1`}
    onClick={() => onButtonClick()}
  >
    {title}
  </button>
);

export default Button;
