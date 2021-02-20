import config from './config';

const booksApi = config.apiUrl + '/books';

export const getBooks = (page, pageSize, filteredValue, filter) =>
  fetch(
    `${booksApi}?page=${page}&size=${pageSize}&filter[${filteredValue}]=${filter}`
  ).then(res => res.json());

export const postBook = body =>
  fetch(booksApi, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  });

export const postMail = mail =>
  fetch(config.apiUrl + '/mail', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ mail }),
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
