import { useEffect, useState, useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { getBooks } from '../helpers';
import { BooksContext } from '../App';
import './PaginationButton.css';

const PaginationButton = ({ pageSize, setPageSize }) => {
  const { setBooks } = useContext(BooksContext);

  const [pagesCountArr, setPagesCountArr] = useState([0]);
  const [page, setPage] = useState(1);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    getBooks(page, pageSize).then(data => setBooks(data.books));
  }, [page, pageSize]);

  useEffect(
    () =>
      getBooks()
        .then(data => Math.ceil(data.meta.booksCount / pageSize))
        .then(res => Array.from({ length: res }, (v, k) => k))
        .then(arr => setPagesCountArr(arr)),
    [pageSize]
  );
  return (
    <Pagination className='col'>
      <Pagination.Prev />
      <Pagination.Item
        onClick={() => {
          setPage(1);
        }}
      >
        {1}
      </Pagination.Item>
      <Pagination.Ellipsis />
      {pagesCountArr.map((_, i) => (
        <Pagination.Item
          onClick={() => {
            setPage(i + 1);
          }}
          key={i}
        >
          {i + 1}
        </Pagination.Item>
      ))}

      {/* <Pagination.Item active>{12}</Pagination.Item> */}

      <Pagination.Ellipsis />
      <Pagination.Item
        onClick={() => {
          setPage(pagesCountArr.length);
        }}
      >
        {pagesCountArr.length}
      </Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationButton;
