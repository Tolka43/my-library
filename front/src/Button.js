const Button = ({ title, onButtonClick, buttonStyle }) => (
  <button
    type='button'
    className={`btn ${buttonStyle}`}
    onClick={() => onButtonClick()}
  >
    {title}
  </button>
);

export default Button;
