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
    <div class="card mb-3 ml-2">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={config.url + book.img} className="card-img-top" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
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
                  put({ author, genre }, id).then(() =>
                    setEditMode(false)
                  );
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="card m-3">
      <img src={config.url + book.img} className="card-img-top" alt="..." />
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
            <SmallInput
              title="data wydania:"
              onInputChange={setDate}
              inputValue={book.date}
            />
          </>
        ) : (
          <>
            <p className="card-text">autor: {book.author}</p>
            <p className="card-text">gatunek: {book.genre}</p>
            <p className="card-text">data wydania: {book.date}</p>
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
              put({ author, genre, date }, id).then(() => setEditMode(false));
            }}
          />
        ) : null}
      </div>
    </div> */
}

export default Card;
