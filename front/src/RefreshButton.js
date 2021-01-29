import { useEffect } from 'react';
import Button from './Button';
import { getBooks } from './helpers';

const RefreshBooks = ({ setBooks }) => {
  useEffect(() => {
    getBooks().then(data => setBooks(data.books));
  }, [setBooks]);

  return (
    <Button
      title="odśwież książki"
      buttonStyle="btn-outline-info m-3"
      onButtonClick={() => {
        getBooks().then(data => setBooks(data.books));
      }}
    />
  );
};

export default RefreshBooks;
