import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AuthorsDataContext } from '../Main';
import './Select.css';

const AuthorsSelect = ({  defaultOption, setAuthor, setAuthorId }) => {
  const authorsData = useContext(AuthorsDataContext);
  return (
    <Form.Group controlId='exampleForm.SelectCustomSizeSm'>
      <span>autor:</span>
      <Form.Control
        as='select'
        size='sm'
        className='select ml-2'
        custom
        onChange={event => {
          setAuthor(event.target.value);
          setAuthorId(
            authorsData.find(
              author =>
                `${author.surname} ${author.name}` === event.target.value
            ).id
          );
        }}
      >
        <option>{defaultOption}</option>
        {authorsData.map(author => (
          <option key={author.id}>{`${author.surname} ${author.name}`}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default AuthorsSelect;
