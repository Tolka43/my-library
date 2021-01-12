import config from './config';

export const getBooks = () => fetch(config.url).then(res => res.json());

export const postBook = body => {
  fetch(config.url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const deleteBook = id => {
  fetch(`${config.url}/${id}`, {
    method: 'DELETE',
  });
};
