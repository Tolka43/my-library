import { useEffect, useState, useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { getBooks } from '../helpers';
import { BooksContext } from '../App';
import './PaginationButton.css';

const PaginationButton = ({ pageSize }) => {
  const { setBooks } = useContext(BooksContext);

  const [pagesCountArr, setPagesCountArr] = useState([0]);
  const [page, setPage] = useState(1);

  const lastPage = pagesCountArr.length;

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
      <Pagination.Prev
        onClick={() => {
          setPage(page === 1 ? 1 : page - 1);
        }}
      />
      <Pagination.Item
        onClick={() => {
          setPage(1);
        }}
      >
        {1}
      </Pagination.Item>
      <Pagination.Ellipsis />
      {pagesCountArr
        .map(item => (
          <Pagination.Item
            active={page - 1 === item}
            onClick={() => {
              setPage(item + 1);
            }}
            key={item}
          >
            {item + 1}
          </Pagination.Item>
        ))
        .slice(page - 2 === -1 ? 0 : page - 2, page + 1)}

      <Pagination.Ellipsis />
      <Pagination.Item
        onClick={() => {
          setPage(lastPage);
        }}
      >
        {lastPage}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => {
          setPage(page === lastPage ? lastPage : page + 1);
        }}
      />
    </Pagination>
  );
};

export default PaginationButton;
