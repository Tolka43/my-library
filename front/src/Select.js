import { Form } from 'react-bootstrap';
import './Select.css';

const Select = ({ onInputChange, defaultOption }) => (
  <Form.Group controlId='exampleForm.SelectCustomSizeSm'>
    <span>gatunek:</span>
    <Form.Control
      as='select'
      size='sm'
      className='select ml-2'
      custom
      onChange={event => onInputChange(event.target.value)}
    >
      <option>{defaultOption}</option>
      <option>horror</option>
      <option>dramat</option>
      <option>literatura młodzieżowa</option>
      <option>powieść historyczna</option>
    </Form.Control>
  </Form.Group>
);

export default Select;
