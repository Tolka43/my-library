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
    <div className='siteBody container-lg'>
      <h1 className='m-4' >Ulubione książki</h1>
      <ul className='list-group'>
        {books?.map(book => (
          <li className='list-group-item m-1' key={book.id}>
            {`"${book.title}" ~ ${book.author.surname} ${book.author.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
