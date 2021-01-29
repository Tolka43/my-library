import Cards from './Cards';
import RefreshBooks from './RefreshButton';
import { useState } from 'react';
import AppNavbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookCreator from './BookCreator';
import Footer from './Footer/Footer';

const App = () => {
  const [books, setBooks] = useState();

  return (
    <Router>
      <AppNavbar />

      <Switch>
        <Route path="/favorites">
          <div className="siteBody"></div>
        </Route>

        <Route path="/settings">
          <div className="siteBody"></div>
        </Route>

        <Route path="/">
          <div className="siteBody">
            <BookCreator />
            <RefreshBooks setBooks={setBooks} />
            <div className="container-sm">
              <Cards books={books} />
            </div>
          </div>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
