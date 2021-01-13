import Card from './Card/Card';

const Cards = ({ books }) => (
  <div className="row">
    {books?.map((book, i) => (
      <Card book={book} key={i} id={i} />
    ))}
  </div>
);

export default Cards;
