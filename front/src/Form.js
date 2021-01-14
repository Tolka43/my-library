import { useState } from 'react';
import Button from './Button';
import { LargeInput } from './Inputs';
import { postBook, getBooks } from './helpers';

const Form = ({ setBooks }) => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [date, setDate] = useState();

  return (
    <div>
      <LargeInput title="tytuł" onInputChange={setTitle} />
      <LargeInput title="autor" onInputChange={setAuthor} />
      <LargeInput title="gatunek literacki" onInputChange={setGenre} />
      <LargeInput title="data wydania" onInputChange={setDate} />
      <Button
        title="dodaj"
        onButtonClick={() => postBook({ title, author, genre, date })}
      />
      <Button
        title="pobierz książki"
        onButtonClick={() => {
          getBooks().then(data => setBooks(data.books));
        }}
      />
    </div>
  );
};

export default Form;
