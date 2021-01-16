import './Card.css';
import Button from '../Button';
import { deleteBook } from '../helpers';
import { useState } from 'react';
import SmallInput from '../Inputs/SmallInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { put } from '../helpers';
import config from '../config';

const Card = ({ book, id }) => {
  const [editMode, setEditMode] = useState(false);
  const [genre, setGenre] = useState();
  const [author, setAuthor] = useState();

  return (
    <div className="card mb-3 ml-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={config.url + book.img} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{book.title}</h5>
              <FontAwesomeIcon
                icon={faPen}
                className="pen-icon"
                onClick={() => setEditMode(!editMode)}
              />
            </div>
            {editMode ? (
              <>
                <SmallInput
                  title="autor:"
                  onInputChange={setAuthor}
                  inputValue={book.author}
                />
                <SmallInput
                  title="gatunek:"
                  onInputChange={setGenre}
                  inputValue={book.genre}
                />
              </>
            ) : (
              <>
                <p className="card-text">autor: {book.author}</p>
                <p className="card-text">gatunek: {book.genre}</p>
              </>
            )}
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
                  put({ author, genre }, id).then(() => setEditMode(false));
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
