import Cards from './Cards';
import RefreshButton from './RefreshButton';
import { useState } from 'react';
import AppNavbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookCreator from './BookCreator';

const App = () => {
  const [books, setBooks] = useState();

  return (
    <div className="App">
      <Router>
        <AppNavbar />

        <Switch>
          <Route path="/favorites"></Route>
          <Route path="/settings"></Route>
          <Route path="/">
            <BookCreator />
            <RefreshButton setBooks={setBooks} />
            <div className="container-sm">
              <Cards books={books} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
