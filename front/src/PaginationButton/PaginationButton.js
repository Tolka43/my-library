import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { getBooks } from '../helpers';
import './PaginationButton.css';

const PaginationButton = ({ pageSize, page, setPage, author }) => {
  const [pagesCountArr, setPagesCountArr] = useState([0]);

  const lastPage = pagesCountArr.length;

/* button paginacji nie zmienia się w przypadku zmiany stanu authora */

  useEffect(
    () =>
      getBooks()
        .then(data => Math.ceil(data.meta.booksCount / pageSize))
        .then(res => Array.from({ length: res }, (v, k) => k))
        .then(arr => setPagesCountArr(arr)),
    [pageSize, author]
  );
  return (
    <Pagination className='col'>
      <Pagination.Prev
        onClick={() => {
          setPage(page === 1 ? 1 : page - 1);
        }}
      />
      {page === lastPage - 1 || page === lastPage ? (
        <Pagination.Item
          onClick={() => {
            setPage(1);
          }}
        >
          {1}
        </Pagination.Item>
      ) : (
        pagesCountArr
          .map(item => {
            return (
              <Pagination.Item
                active={page - 1 === item}
                onClick={() => {
                  setPage(item + 1);
                }}
                key={item}
              >
                {item + 1}
              </Pagination.Item>
            );
          })
          .slice(page - 2 === -1 ? 0 : page - 2, page + 1)
      )}

      {page === lastPage || page === lastPage - 1 ? (
        <>
          <Pagination.Ellipsis />
          <Pagination.Item
            active={page === lastPage - 1}
            onClick={() => {
              setPage(lastPage - 1);
            }}
          >
            {lastPage - 1}
          </Pagination.Item>
        </>
      ) : (
        <Pagination.Ellipsis />
      )}

      <Pagination.Item
        active={page === lastPage}
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
