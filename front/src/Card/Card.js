import './Card.css';
import Button from '../Button';
import { deleteBook } from '../helpers';
import { useContext, useState } from 'react';
import SmallInput from '../Inputs/SmallInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { put } from '../helpers';
import config from '../config';
import Select from '../Select/Select';
import { BooksContext } from '../App';
import { ViewModeContext } from '../Main';

const Card = ({ book, id }) => {
  const [editMode, setEditMode] = useState(false);
  const [genre, setGenre] = useState(book.genre);
  const [author, setAuthor] = useState(book.author);

  const { setBooks, books } = useContext(BooksContext);
  const viewMode = useContext(ViewModeContext);

  return (
    <div className='card ml-2'>
      <div className='row g-0'>
        <div className={viewMode === 'tiles' ? 'col-md-4' : 'col-md-2'}>
          <img
            src={config.apiUrl + book.img}
            className='card-img-top'
            alt='...'
          />
        </div>
        <div className={viewMode === 'tiles' ? 'col-md-8' : 'col-md-10'}>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>{book.title}</h5>
              <FontAwesomeIcon
                icon={faPen}
                className='pen-icon'
                onClick={() => setEditMode(!editMode)}
              />
            </div>
            {editMode ? (
              <>
                <SmallInput
                  title='autor:'
                  onInputChange={setAuthor}
                  inputValue={`${book.author.surname} ${book.author.name}`}
                />
                <Select onInputChange={setGenre} defaultOption={book.genre} />
              </>
            ) : (
              <>
                <p className='card-text'>autor: {`${book.author.surname} ${book.author.name}`}</p>
                <p className='card-text'>gatunek: {book.genre}</p>
              </>
            )}
            <Button
              buttonStyle='btn-secondary'
              title='usuń'
              onButtonClick={() => {
                deleteBook(id).then(() => {
                  const reduceBooks = books.filter((book, i) => i !== id);
                  setBooks(reduceBooks);
                });
              }}
            />
            {editMode ? (
              <Button
                title='zapisz'
                buttonStyle='btn-outline-info ml-2'
                onButtonClick={() => {
                  put({ author, genre }, id).then(() => {
                    setEditMode(false);
                    const editedBooks = books.map((book, i) =>
                      i === id ? { ...book, author, genre } : book
                    );
                    setBooks(editedBooks);
                  });
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
