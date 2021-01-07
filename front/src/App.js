import Cards from './Cards';
import Form from './Form';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState();

  const get = () => {
    fetch('http://localhost:4444/api/books')
      .then((res) => res.json())
      .then((res) => setBooks(res));
  };
  return (
    <div className="App">
      <Form get={get} />
      <div className="container-sm">
        <Cards books={books} />
      </div>
    </div>
  );
};

export default App;
