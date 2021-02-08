import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import LargeInput from './Inputs/LargeInput';
import { postBook } from './helpers';
import Button from './Button';

function BookCreator() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [date, setDate] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        title='dodaj książkę'
        buttonStyle='btn-secondary m-3'
        onButtonClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj książkę</Modal.Title>
        </Modal.Header>
        <LargeInput title='tytuł' onInputChange={setTitle} />
        <LargeInput title='autor' onInputChange={setAuthor} />
        <LargeInput title='gatunek literacki' onInputChange={setGenre} />
        <LargeInput title='data wydania' onInputChange={setDate} />
        <Modal.Footer>
          <Button
            title='zamknij'
            buttonStyle='btn-outline-dark'
            onButtonClick={handleClose}
          />
          <Button
            title='zapisz'
            buttonStyle='btn-info'
            onButtonClick={() =>
              postBook({ title, author, genre, date }).then(handleClose)
            }
          >
            dodaj
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookCreator;
