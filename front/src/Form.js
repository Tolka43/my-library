import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getBooks } from './helpers';
import BookCreator from './BookCreator';

const Form = ({ setBooks }) => {
  useEffect(() => {
    getBooks().then(data => setBooks(data.books));
  }, [setBooks]);

  return (
    <div>
      <BookCreator />

      <Button
        variant="outline-dark"
        title="odśwież książki"
        onClick={() => {
          getBooks().then(data => setBooks(data.books));
        }}
      >
        odśwież książki
      </Button>
    </div>
  );
};

export default Form;
