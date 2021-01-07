const Button = ({ title, onButtonClick }) => (
  <button type="button" className="btn btn-primary" onClick={() => onButtonClick()}>
    {title}
  </button>
);

export default Button;
