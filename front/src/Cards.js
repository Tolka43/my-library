import { useContext } from 'react';
import Card from './Card/Card';
import { BooksContext } from './App';
import { useEffect } from 'react';
import { getBooks } from './helpers';
import { ViewModeContext } from './Main';

const Cards = () => {
  const { books, setBooks } = useContext(BooksContext);
  const viewMode = useContext(ViewModeContext);

  useEffect(() => {
    getBooks().then(data => setBooks(data.books));
  }, [setBooks]);

  return (
    <div className='row'>
      {books?.map((book, i) => (
        <div className={viewMode === 'tiles' ? 'col-6' : 'col-12'} key={i}>
          <Card book={book} id={i} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
