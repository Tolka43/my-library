import { createContext, useState } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton/PaginationButton';
import PageSizeButton from './PageSizeButton';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  const [pageSize, setPageSize] = useState(8);

  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col-md-10'>
            <BookCreator />
          </div>
          <div className='col-md-1'>
            <ViewModeButton
              setViewMode={setViewMode}
            />
          </div>
          <div className='col-md-1'>
            <PageSizeButton setPageSize={setPageSize} />
          </div>
        </div>
        <Cards />
        <div className='row justify-content-center'>
            <PaginationButton pageSize={pageSize} />
          </div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
