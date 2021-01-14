import config from './config';

const booksApi = config.url + '/books'

export const getBooks = () => fetch(booksApi).then(res => res.json());

export const postBook = body => {
  fetch(booksApi, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const deleteBook = id => {
  fetch(`${booksApi}/${id}`, {
    method: 'DELETE',
  });
};

export const putGenre = (body, id) =>
  fetch(`${booksApi}/${id}`, {
    headers: { 'Content-Type': 'text/plain' },
    method: 'PUT',
    body: body,
  });
