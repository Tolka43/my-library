import { useContext } from 'react';
import Card from './Card/Card';
import { BooksContext } from './App';
import { useEffect } from 'react';
import { getBooks } from './helpers';

const Cards = () => {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks().then(data => setBooks(data.books));
  }, [setBooks]);

  return (
    <div className="row">
      {books?.map((book, i) => (
        <Card book={book} key={i} id={i} />
      ))}
    </div>
  );
};

export default Cards;
