import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { postBook, getBooks } from './helpers';

const Form = ({ setBooks }) => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [date, setDate] = useState();

  return (
    <div>
      <Input title="tytuł" onInputChange={setTitle} />
      <Input title="autor" onInputChange={setAuthor} />
      <Input title="gatunek literacki" onInputChange={setGenre} />
      <Input title="data wydania" onInputChange={setDate} />
      <Button
        title="dodaj"
        onButtonClick={() => postBook({ title, author, genre, date })}
      />
      <Button
        title="pobierz książki"
        onButtonClick={() => {
          getBooks().then(books => setBooks(books));
        }}
      />
    </div>
  );
};

export default Form;
