import { createContext, useEffect, useState, useContext } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';
import AuthorsButton from './AuthorsSortButton';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import GenreButton from './GenreSortButton';
import Mail from './Mail';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [genre, setGenre] = useState('');
  const [filteredValue, setFilteredValue] = useState('author')

  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks(page, pageSize, filteredValue, filter).then(data => setBooks(data.books));
  }, [setBooks, filter, page, pageSize]);

  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col-md-8'>
            <BookCreator />
          </div>
          <div className='col-md-1'>
            <GenreButton
              title='gatunek'
              filter={filter}
              setFilter={setFilter}
              setFilteredValue={setFilteredValue}
              page={page}
              pageSize={pageSize}
            />
          </div>
          <div className='col-md-1'>
            <AuthorsButton
              title='autor'
              page={page}
              pageSize={pageSize}
              setFilter={setFilter}
              genre={genre}
              setFilteredValue={setFilteredValue}
            />
          </div>
          <div className='col-md-1'>
            <ViewModeButton setViewMode={setViewMode} />
          </div>
          <div className='col-md-1'>
            <PageSizeButton setPageSize={setPageSize} />
          </div>
        </div>
        <Cards />
        <div className='row justify-content-center'>
          <PaginationButton
            pageSize={pageSize}
            page={page}
            setPage={setPage}
            filter={filter}
          />
        </div>
        <div>
          <Mail />
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
