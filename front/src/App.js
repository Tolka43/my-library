import Cards from './Cards';
import Form from './Form';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState();

  return (
    <div className="App">
      <Form setBooks={setBooks} />
      <div className="container-sm">
        <Cards books={books} />
      </div>
    </div>
  );
};

export default App;
