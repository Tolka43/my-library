import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import LargeInput from './Inputs/LargeInput';
import { postBook } from './helpers';

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
      <Button variant="secondary" className="m-3" onClick={handleShow}>
        Dodaj książkę
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj książkę</Modal.Title>
        </Modal.Header>
        <LargeInput title="tytuł" onInputChange={setTitle} />
        <LargeInput title="autor" onInputChange={setAuthor} />
        <LargeInput title="gatunek literacki" onInputChange={setGenre} />
        <LargeInput title="data wydania" onInputChange={setDate} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            zamknij
          </Button>
          <Button
            variant="primary"
            onClick={() =>
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
