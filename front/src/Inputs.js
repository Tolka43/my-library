export const LargeInput = ({ title, onInputChange }) => (
  <div className="input-group mb-3">
    <span className="input-group-text">{title}</span>
    <input
      type="text"
      className="form-control"
      onChange={event => onInputChange(event.target.value)}
    />
  </div>
);

export const SmallInput = ({title, onInputChange}) => 
  <div className="input-group input-group-sm mb-3">
    <span>
      {title}
    </span>
    <input
      type="text"
      className="form-control"
      onChange={event => onInputChange(event.target.value)}
    />
  </div>;
