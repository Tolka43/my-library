import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AuthorsDataContext } from '../Main';
// import './Select.css';

const AuthorsSelect = ({ defaultOption, setAuthor, setAuthorId, size, spanMargin }) => {
  const authorsData = useContext(AuthorsDataContext);
  return (
    <Form.Group controlId='exampleForm.SelectCustomSizeSm' className='input-group my-2'>
      <span className={spanMargin}>autor:</span>
      <Form.Control
        as='select'
        size={size}
        className='select ml-2'
        custom
        onChange={event => {
          const choosedAuthor = authorsData.find(
            author => `${author.surname} ${author.name}` === event.target.value
          );
          if (setAuthor) {
            setAuthor(event.target.value);
          }

          setAuthorId(choosedAuthor.id);
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
