import { createContext, useState } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import ViewModeButton from './ViewModeButton';
import PaginationButton from './PaginationButton'

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col'>
            <ViewModeButton setViewMode={setViewMode} />
          </div>
          <div className='col'>
            <BookCreator />
          </div>
        </div>
        <Cards />
        <div><PaginationButton/></div>
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
