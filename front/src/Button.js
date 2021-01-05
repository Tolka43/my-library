const Button = ({ title, onButtonClick }) => (
  <button type="button" class="btn btn-primary" onClick={() => onButtonClick()}>
    {title}
  </button>
);

export default Button;
