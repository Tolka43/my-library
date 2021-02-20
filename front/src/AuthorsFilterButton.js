import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import { useContext } from 'react';

const AuthorsButton = ({page, pageSize, setFilter, setFilteredValue }) => {
  const { setBooks } = useContext(BooksContext);

  const authors = [
    { stringForUrl: '', title: 'wszyscy' },
    { stringForUrl: 'Sapkowski+Andrzej', title: 'Sapkowski Andrzej' },
    { stringForUrl: 'Rowling+J.K.', title: 'Rowling J.K.' },
    { stringForUrl: 'King+Stephen', title: 'King Stephen' },
  ];

  return (
    <DropdownButton
      className='mt-3 ml-2'
      as={ButtonGroup}
      id='dropdown-variants-Secondary'
      variant='secondary'
      title='author'
    >
      {authors.map((authorData, i) => {
        return (
          <Dropdown.Item
            key={i}
            eventKey={i + 1}
            onClick={() => {
              setFilteredValue('author')
              setFilter(authorData.stringForUrl);
              getBooks(page, pageSize, 'author', authorData.stringForUrl).then(data => {
                setBooks(data.books);
              });
            }}
          >
            {authorData.title}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
export default AuthorsButton;
