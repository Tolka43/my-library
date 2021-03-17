import { useContext, useState } from 'react';
import Card from '../Card/Card';
import { ViewModeContext } from '../Main';
import './Cards.css';
import { BooksContext } from '../App';

const Cards = () => {
  const viewMode = useContext(ViewModeContext);
  const { books } = useContext(BooksContext);
  const [favoriteBooks, setFavoriteBooks] = useState()

  return (
    <div className='row'>
      {books?.map((book, i) => (
        <div
          className={`${viewMode === 'tiles' ? 'col-lg-6' : 'col-lg-12'} mb-3`}
          key={i}
        >
          <Card book={book} id={i} favoriteBooks={favoriteBooks} setFavoriteBooks={setFavoriteBooks} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
