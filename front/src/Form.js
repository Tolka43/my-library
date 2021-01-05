import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const post = () => {
    fetch('http://localhost:4444/api/books', {
      method: 'POST',
      body: JSON.stringify({ title: title, author: author, species: genre }),
    }).then(() => alert('jest ok'));
  };

  return (
    <div>
      {title},{author},{genre}
      <Input title="tytuł" onInputChange={setTitle} />
      <Input title="autor" onInputChange={setAuthor} />
      <Input title="gatunek literacki" onInputChange={setGenre} />
      <Button title="dodaj" onButtonClick={post} />
    </div>
  );
};

export default Form;
