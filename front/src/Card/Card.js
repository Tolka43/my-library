import './Card.css';
import Button from '../Button';
import { deleteBook } from '../helpers';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { put } from '../helpers';
import config, { appConfig } from '../config';
import Select from '../Selects/Select';
import { BooksContext } from '../App';
import { ViewModeContext } from '../Main';
import AuthorsSelect from '../Selects/AuthorsSelect';

const Card = ({ book, id, toggleFavoriteBook, isBookFavorite }) => {
  const [editMode, setEditMode] = useState(false);
  const [genre, setGenre] = useState(book.genre);
  const [author, setAuthor] = useState(
    `${book.author.surname} ${book.author.name}`
  );
  const [authorId, setAuthorId] = useState();
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
              <div className='card-icons'>
                <FontAwesomeIcon
                  icon={
                    isBookFavorite(book.id)
                      ? ['fas', 'heart']
                      : ['far', 'heart']
                  }
                  className='heart-icon mx-2'
                  onClick={() => {
                    toggleFavoriteBook(book.id);
                  }}
                />
                <FontAwesomeIcon
                  icon={faPen}
                  className='pen-icon ml-2'
                  onClick={() => setEditMode(!editMode)}
                />
              </div>
            </div>
            {editMode ? (
              <>
                {/* <Select
                  title={'autor'}
                  onInputChange={setAuthor}
                  defaultOption={`${book.author.surname} ${book.author.name}`}
                  options={appConfig.authors}
                /> */}

                <AuthorsSelect
                  setAuthorId={setAuthorId}
                  setAuthor={setAuthor}
                  defaultOption={author}
                  size={'sm'}
                />

                <Select
                  title={'gatunek'}
                  onInputChange={setGenre}
                  defaultOption={book.genre}
                  options={appConfig.genres}
                  // classes={'narrower-select'}
                />
              </>
            ) : (
              <>
                <p className='card-text'>autor: {author}</p>
                <p className='card-text'>gatunek: {book.genre}</p>
              </>
            )}
            <Button
              buttonStyle='btn-secondary'
              title='usuń'
              onButtonClick={() => {
                deleteBook(id).then(() => {
                  const reduceBooks = books.filter((book, i) => book.id !== id);
                  setBooks(reduceBooks);
                });
              }}
            />
            {editMode ? (
              <Button
                title='zapisz'
                buttonStyle='btn-outline-info ml-2'
                onButtonClick={() => {
                  put({ authorId, genre }, id).then(() => {
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
