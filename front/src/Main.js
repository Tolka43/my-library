/* SortButton, GnreFilterButton oraz AuthorsFilterButton ogarnąć jako jeden plik
z tytułem, tablicą itd przekazywanymi przez parametry */

import { createContext, useEffect, useState, useContext } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';
import AuthorsButton from './AuthorsFilterButton';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import GenreButton from './GenreFilterButton';
import Mail from './Mail';
import SortButton from './SortButton';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [sortValue, setSortValue] = useState('asc');
  const [sortOption, setSortOption] = useState('author');

  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks({
      page,
      pageSize,
      filterOption,
      filterValue,
      sortOption,
      sortValue,
    }).then(data => setBooks(data.books));
  }, [
    setBooks,
    filterOption,
    filterValue,
    page,
    pageSize,
    sortValue,
    sortOption,
  ]);

  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col-md-4'>
            <BookCreator />
          </div>
          <div className='col-md-1'>
            <SortButton
              setSortValue={setSortValue}
              setSortOption={setSortOption}
            />
          </div>
          <div className='col-md-1'>
            <GenreButton
              setFilterValue={setFilterValue}
              setFilterOption={setFilterOption}
              page={page}
              pageSize={pageSize}
            />
          </div>
          <div className='col-md-3'>
            <AuthorsButton
              page={page}
              pageSize={pageSize}
              setFilterValue={setFilterValue}
              setFilterOption={setFilterOption}
            />
          </div>
          <div className='col-md-1'>
            <ViewModeButton setViewMode={setViewMode} />
          </div>
          <div className='col-md-2'>
            <PageSizeButton setPageSize={setPageSize} />
          </div>
        </div>
        <Cards />
        <div className='row justify-content-center'>
          <PaginationButton pageSize={pageSize} page={page} setPage={setPage} />
        </div>
        <div>
          <Mail />
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
