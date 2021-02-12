import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import { useContext } from 'react';

const SortButton = ({ title, page, pageSize, setAuthor }) => {
  const { setBooks } = useContext(BooksContext);

  const authors = [
    { stringForUrl: '', title: 'wszyscy' },
    { stringForUrl: 'Sapkowski+Andrzej', title: 'Sapkowski Andrzej' },
    { stringForUrl: 'Rowling+J.K.', title: 'Rowling J.K.' },
  ];

  return (
    <DropdownButton
      className='mt-3'
      as={ButtonGroup}
      id={`dropdown-variants-Secondary`}
      variant={'Secondary'.toLowerCase()}
      title={title}
    >
      {authors.map((authorData, i) => {
        return (
          <Dropdown.Item
            key={authorData}
            eventKey={i + 1}
            onClick={() => {
              setAuthor(authorData.stringForUrl);
              getBooks(page, pageSize, authorData.stringForUrl).then(data => {
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
export default SortButton;
