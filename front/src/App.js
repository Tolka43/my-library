import { createContext, useState } from 'react';
import AppNavbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Main from './Main';
import Favorites from './Favorites';

export const BooksContext = createContext();

const App = () => {
  const [books, setBooks] = useState();

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      <Router>
        <AppNavbar />

        <Switch>
          <Route path='/favorites'>
            <Favorites />
          </Route>

          <Route path='/settings'>
            <div className='siteBody'></div>
          </Route>

          <Route path='/'>
            <Main />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </BooksContext.Provider>
  );
};

export default App;
