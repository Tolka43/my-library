import { createContext, useState } from 'react';
import BookCreator from './BookCreator';
import Cards from './Cards/Cards';
import RadioButton from './RadioButton';

export const ViewModeContext = createContext();

const Main = () => {
  const [viewMode, setViewMode] = useState('tiles');
  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className='siteBody container'>
        <div className='row'>
          <div className='col'>
            <RadioButton setViewMode={setViewMode} />
          </div>
          <div className='col'>
            <BookCreator />
          </div>
        </div>
        <Cards />
      </div>
    </ViewModeContext.Provider>
  );
};

export default Main;
