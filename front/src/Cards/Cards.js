import { useContext } from 'react';
import Card from '../Card/Card';
import { ViewModeContext } from '../Main';
import './Cards.css';
import { BooksContext } from '../App';
import { useFavoriteBooks } from '../hooks/useFavoriteBooks';

const Cards = () => {
  const viewMode = useContext(ViewModeContext);
  const { books } = useContext(BooksContext);
  const { toggleFavoriteBook, favoriteBooks } = useFavoriteBooks();

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
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
