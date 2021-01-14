const SmallInput = ({title, onInputChange}) => 
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

  export default SmallInput