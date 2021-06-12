import { Form } from 'react-bootstrap';
import './Select.css';

const Select = ({ onInputChange, defaultOption, options, title, classes }) => {
  const optionsTitles = options.map(option => option.title);
  return (
    <Form.Group controlId='exampleForm.SelectCustomSizeSm' className='input-group my-2'>
      <span>{`${title}:`}</span>
      <Form.Control
        as='select'
        size='sm'
        className={`${classes} select ml-2`}
        custom
        onChange={event => onInputChange(event.target.value)}
      >
        <option>{defaultOption}</option>
        {optionsTitles.map(optionTitle => (
          <option key={optionTitle}>{optionTitle}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
