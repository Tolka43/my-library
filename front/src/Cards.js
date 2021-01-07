import Button from './Button';

const Cards = ({ books }) => (
  <div className="row">
    {books?.map((book, i) => (
      <div className="card" key={i}>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">autor: {book.author}</p>
          <p className="card-text">gatunek: {book.genre}</p>
          <p className="card-text">data wydania: {book.date}</p>
          <Button title="usuń" />
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
