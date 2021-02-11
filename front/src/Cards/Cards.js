import { useContext } from 'react';
import Card from '../Card/Card';
import { BooksContext } from '../App';
import { useEffect, useState } from 'react';
import { getBooks } from '../helpers';
import { ViewModeContext } from '../Main';
import './Cards.css';

const Cards = () => {
  const { books, setBooks } = useContext(BooksContext);
  const viewMode = useContext(ViewModeContext);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    getBooks(page, pageSize).then(data => setBooks(data.books));
  }, [page, pageSize]);

  return (
    <div className='row'>
      {books?.map((book, i) => (
        <div
          className={`${viewMode === 'tiles' ? 'col-6' : 'col-12'} mb-3`}
          key={i}
        >
          <Card book={book} id={i} />
        </div>
      ))}
      <div>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(3)}>3</button>
      </div>
      <div>
        <button onClick={() => setPageSize(8)}>8</button>
        <button onClick={() => setPageSize(16)}>16</button>
      </div>
    </div>
  );
};

export default Cards;
