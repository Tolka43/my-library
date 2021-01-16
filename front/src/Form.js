import { useEffect } from 'react';
import Button from './Button';
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
        buttonStyle="btn-outline-info m-3"
        title="odśwież książki"
        onButtonClick={() => {
          getBooks().then(data => setBooks(data.books));
        }}
      >
        odśwież książki
      </Button>
    </div>
  );
};

export default Form;
