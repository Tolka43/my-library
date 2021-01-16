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
        title="odśwież książki"
        onButtonClick={() => {
          getBooks().then(data => setBooks(data.books));
        }}
      />
    </div>
  );
};

export default Form;
