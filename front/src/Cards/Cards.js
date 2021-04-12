import { useContext } from 'react';
import Card from '../Card/Card';
import { ViewModeContext } from '../Main';
import './Cards.css';
import { BooksContext } from '../App';

const Cards = ({toggleFavoriteBook, favoriteBooks, isBookFavorite}) => {
  const viewMode = useContext(ViewModeContext);
  const { books } = useContext(BooksContext);
  

  return (
    <div className='row'>
      {books?.map(book => (
        <div
          className={`${viewMode === 'tiles' ? 'col-lg-6' : 'col-lg-12'} mb-3`}
          key={book.id}
        >
          <Card
            book={book}
            id={book.id}
            toggleFavoriteBook={toggleFavoriteBook}
            favoriteBooks={favoriteBooks}
            isBookFavorite={isBookFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
