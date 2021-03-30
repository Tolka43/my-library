import { createContext, useState } from 'react';
import Cards from './Cards/Cards';

export const FavoriteBooksContext = createContext();

const Favorites = () => {
  const [favoriteBooks, setFavoriteBooks] = useState();
  return (
    <FavoriteBooksContext.Provider value={{ favoriteBooks, setFavoriteBooks }}>
      <Cards/>
    </FavoriteBooksContext.Provider>
  );
};

export default Favorites;
