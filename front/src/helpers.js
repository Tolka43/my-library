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

export const put = (body, id) =>
  fetch(`${booksApi}/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(body),
  });
