import config from './config';

const booksApi = config.apiUrl + '/books';

export const getBooks = ({
  page,
  pageSize,
  filterOption,
  filterValue,
  sortOption,
  sortValue,
}) => {
  const parts = [];

  if (page) {
    parts.push(`page=${page}`);
  }
  if (pageSize) {
    parts.push(`size=${pageSize}`);
  }
  if (filterValue && filterOption) {
    parts.push(`filter[${filterOption}]=${filterValue}`);
  }
  if (sortOption && sortValue) {
    parts.push(`sort[${sortOption}]=${sortValue}`);
  }

  const url = parts.length === 0 ? booksApi : `${booksApi}?${parts.join('&')}`;
  return fetch(url).then(res => res.json());
};

export const postBook = body =>
  fetch(booksApi, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  });

export const deleteBook = id =>
  fetch(`${booksApi}/${id}`, {
    method: 'DELETE',
  });

export const put = (body, id) =>
  fetch(`${booksApi}/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(body),
  });
