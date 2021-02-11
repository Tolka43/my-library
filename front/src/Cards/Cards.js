import { useContext } from 'react';
import Card from '../Card/Card';
import { ViewModeContext } from '../Main';
import './Cards.css';
import { BooksContext } from '../App';

const Cards = () => {
  const viewMode = useContext(ViewModeContext);
  const { books } = useContext(BooksContext);

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
    </div>
  );
};

export default Cards;
