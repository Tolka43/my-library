import { createContext, useEffect, useState, useContext } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';
import SortButton from './SortButton';
import { getBooks } from './helpers';
import { BooksContext } from './App';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [author, setAuthor] = useState('');

  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks(page, pageSize, author).then(data => setBooks(data.books));
  }, [page, pageSize]);

  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col-md-9'>
            <BookCreator />
          </div>
          <div className='col-md-1'>
            <SortButton
              title='autor'
              page={page}
              pageSize={pageSize}
              setAuthor={setAuthor}
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
          <PaginationButton pageSize={pageSize} page={page} setPage={setPage} author={author}/>
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
