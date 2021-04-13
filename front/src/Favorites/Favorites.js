import { useEffect, useState } from 'react';
import { getBooks } from '../helpers';
import { Card, Accordion, Toggle } from 'react-bootstrap';
import './Favorites.css'

const Favorites = ({ favoriteBooks }) => {
  const [books, setBooks] = useState([]);
  const eventKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    getBooks({
      filterOption: 'id',
      filterValue: favoriteBooks.join(','),
    }).then(data => setBooks(data.books));
  }, [favoriteBooks]);

  return (
    <div className='siteBody container-lg'>
      <h1 className='p-4 m-0'>Ulubione książki</h1>
      <Accordion defaultActiveKey='0'>
        {books?.map((book, i) => (
          <Card key={book.id}>
            <Accordion.Toggle as={Card.Header}  eventKey={i + 1}>
              {`"${book.title}"`}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={i + 1}>
              <Card.Body><p className="mb-1">{`${book.author.surname} ${book.author.name}`}</p>
              <p className="mb-0 small">{`${book.genre}`}</p></Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default Favorites;
