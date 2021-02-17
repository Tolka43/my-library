import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
// import { getBooks } from './helpers';
// import { BooksContext } from './App';
// import { useContext } from 'react';

const GenreButton = ({ title, page, pageSize, author, setGenre }) => {
  // const { setBooks } = useContext(BooksContext);

  const genres = [
    { stringForUrl: '', title: 'wszystkie' },
    { stringForUrl: 'fantastyka', title: 'fantastyka' },
    { stringForUrl: 'horror', title: 'horror' },
  ];

  return (
    <DropdownButton
      className='mt-3'
      as={ButtonGroup}
      id={`dropdown-variants-Secondary`}
      variant='secondary'
      title={title}
    >
      {genres.map((genreData, i) => {
        return (
          <Dropdown.Item
            key={genreData}
            eventKey={i + 1}
            // onClick={() => {
            //   setGenre(genreData.stringForUrl);
            //   getBooks(page, pageSize, author, genreData.stringForUrl).then(
            //     data => {
            //       setBooks(data.books);
            //     }
            //   );
            // }}
          >
            {genreData.title}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};
export default GenreButton;
