import { createContext, useState } from 'react';
import AppNavbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Main from './Main';
import Favorites from './Favorites/Favorites';
import { useFavoriteBooks } from './hooks/useFavoriteBooks';

export const BooksContext = createContext();

const App = () => {
  const [books, setBooks] = useState();
  const {
    toggleFavoriteBook,
    favoriteBooks,
    isBookFavorite,
  } = useFavoriteBooks();

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      <Router>
        <AppNavbar />

        <Switch>
          <Route path='/favorites'>
            <Favorites favoriteBooks={favoriteBooks} />
          </Route>

          <Route path='/settings'>
            <div className='siteBody'></div>
          </Route>

          <Route path='/'>
            <Main
              toggleFavoriteBook={toggleFavoriteBook}
              favoriteBooks={favoriteBooks}
              isBookFavorite={isBookFavorite}
            />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </BooksContext.Provider>
  );
};

export default App;
