import { Form } from 'react-bootstrap';
import './Select.css';

const Select = ({ onInputChange, defaultOption, options, title }) => {
  const optionsTitles = options.map(option => option.title);
  return (
    <Form.Group controlId='exampleForm.SelectCustomSizeSm'>
      <span>{`${title}:`}</span>
      <Form.Control
        as='select'
        size='sm'
        className='select ml-2'
        custom
        onChange={event => onInputChange(event.target.value)}
      >
        <option>{defaultOption}</option>
        {optionsTitles.map(optionTitle => (
          <option>{optionTitle}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
