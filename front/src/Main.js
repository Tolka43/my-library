import { createContext, useEffect, useState, useContext } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';
import AuthorsButton from './AuthorsSortButton';
import { getBooks, postMail } from './helpers';
import { BooksContext } from './App';
import GenreButton from './GenreSortButton';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [mail, setMail] = useState();

  const { setBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks(page, pageSize, author).then(data => setBooks(data.books));
  }, [setBooks, author, page, pageSize]);

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
              author={author}
              setGenre={setGenre}
              page={page}
              pageSize={pageSize}
            />
          </div>
          <div className='col-md-1'>
            <AuthorsButton
              title='autor'
              page={page}
              pageSize={pageSize}
              setAuthor={setAuthor}
              genre={genre}
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
            author={author}
          />
        </div>
        <div>
          <input onChange={event => setMail(event.target.value)}></input>
          <button
            onClick={() => {
              postMail(mail).then(() => alert('wysłano maila'));
            }}>
            wyślij maila
          </button>
        </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
