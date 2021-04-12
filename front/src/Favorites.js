import { useEffect, useState } from 'react';
import { getBooks } from './helpers';

const Favorites = ({ favoriteBooks }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks({
      filterOption: 'id',
      filterValue: favoriteBooks.join(','),
    }).then(data => setBooks(data.books));
  }, [favoriteBooks]);

  return (
    <ul>
      {books?.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

export default Favorites;
