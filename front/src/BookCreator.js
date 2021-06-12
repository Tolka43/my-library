import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import LargeInput from './Inputs/LargeInput';
import { postBook } from './helpers';
import Button from './Button';

function BookCreator() {
  const [title, setTitle] = useState();
  const [authorId, setAuthorId] = useState();
  const [genre, setGenre] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        title='dodaj książkę'
        buttonStyle='btn-secondary'
        onButtonClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj książkę</Modal.Title>
        </Modal.Header>
        <LargeInput title='tytuł' onInputChange={setTitle} />
        <LargeInput title='autor' onInputChange={setAuthorId} />
        <LargeInput title='gatunek literacki' onInputChange={setGenre} />
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
              postBook({ title, authorId, genre}).then(handleClose)
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
