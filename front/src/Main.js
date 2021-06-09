/* SortButton, GnreFilterButton oraz AuthorsFilterButton ogarnąć jako jeden plik
z tytułem, tablicą itd przekazywanymi przez parametry */

import { createContext, useEffect, useState, useContext } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton/ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';
import AuthorsButton from './AuthorsFilterButton';
import { getBooks } from './helpers';
import { BooksContext } from './App';
import GenreButton from './GenreFilterButton';
import SortButton from './SortButton';

export const ViewModeContext = createContext();

const Main = ({toggleFavoriteBook, favoriteBooks, isBookFavorite}) => {
  const [viewMode, setViewMode] = useState('list');
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [sortValue, setSortValue] = useState('asc');
  const [sortOption, setSortOption] = useState('author');

  const [pagesCountArr, setPagesCountArr] = useState([0]);

  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks({
      page,
      pageSize,
      filterOption,
      filterValue,
      sortOption,
      sortValue,
    })
      .then(data => {
        setBooks(data.books);
        return data;
      })
      .then(data => Math.ceil(data.meta.filteredBooksCount / pageSize))
      .then(res => Array.from({ length: res }, (v, k) => k + 1))
      .then(arr => setPagesCountArr(arr));
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
      <div className='siteBody container-lg'>
        <div className='row'>
          <div className='col-lg-4 d-flex justify-content-start py-3'>
            <BookCreator />
          </div>
          <div className='col-lg-4 d-flex justify-content-start justify-content-lg-center py-3'>
            <div>
              <SortButton
                setSortValue={setSortValue}
                setSortOption={setSortOption}
              />
            </div>
            <div>
              <GenreButton
                setFilterValue={setFilterValue}
                setFilterOption={setFilterOption}
                page={page}
                pageSize={pageSize}
              />
            </div>
            <div>
              <AuthorsButton
                page={page}
                pageSize={pageSize}
                setFilterValue={setFilterValue}
                setFilterOption={setFilterOption}
              />
            </div>
          </div>
          <div className='col-lg-4 d-flex justify-content-start justify-content-lg-end py-3'>
            <div>
              <ViewModeButton setViewMode={setViewMode} />
            </div>
            <div>
              <PageSizeButton setPageSize={setPageSize} />
            </div>
          </div>
        </div>
        <Cards 
        toggleFavoriteBook={toggleFavoriteBook}
        isBookFavorite={isBookFavorite}
        favoriteBooks={favoriteBooks}/>
        <div className='row justify-content-center'>
          <PaginationButton
            page={page}
            setPage={setPage}
            pagesCountArr={pagesCountArr}
          />
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
