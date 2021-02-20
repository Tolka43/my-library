import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import { useContext } from 'react';

const GenreButton = ({page, pageSize, setFilter, setFilteredValue }) => {
  const { setBooks } = useContext(BooksContext);

  const genres = [
    { stringForUrl: '', title: 'wszystkie' },
    { stringForUrl: 'fantastyka', title: 'fantastyka' },
    { stringForUrl: 'horror', title: 'horror' },
    { stringForUrl: 'literatura+młodzieżowa', title: 'literatura młodzieżowa' },
    { stringForUrl: 'powieść+historyczna', title: 'powieść historyczna' },
  ];

  return (
    <DropdownButton
      className='mt-3'
      as={ButtonGroup}
      id={`dropdown-variants-Secondary`}
      variant='secondary'
      title='gatunek'
    >
      {genres.map((genreData, i) => {
        return (
          <Dropdown.Item
            key={i}
            eventKey={i + 1}
            onClick={() => {
              setFilteredValue('genre')
              setFilter(genreData.stringForUrl);
              getBooks(page, pageSize, 'genre', genreData.stringForUrl).then(
                data => {
                  setBooks(data.books);
                }
              );
            }}
          >
            {genreData.title}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
export default GenreButton;
