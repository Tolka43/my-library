import './Card.css';
import Button from '../Button';
import { deleteBook, getBooks } from '../helpers';
import { useState } from 'react';
import { SmallInput } from '../Inputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { putGenre } from '../helpers';
import config from '../config';

const Card = ({ book, id }) => {
  const [editMode, setEditMode] = useState(false);
  const [genre, setGenre] = useState();

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{book.title}</h5>
          <FontAwesomeIcon
            icon={faPen}
            className="pen-icon"
            onClick={() => setEditMode(!editMode)}
          />
        </div>
        <p className="card-text">autor: {book.author}</p>
        {editMode ? (
          <SmallInput onInputChange={setGenre} />
        ) : (
          <p className="card-text">gatunek: {book.genre}</p>
        )}
        <p className="card-text">data wydania: {book.date}</p>
        <img src={config.url + book.img}/>
        <Button
          title="usuń"
          onButtonClick={() => {
            deleteBook(id);
          }}
        />
        {editMode ? (
          <Button
            title="zapisz"
            onButtonClick={() => {
              putGenre(genre, id).then(() => setEditMode(false));
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Card;
