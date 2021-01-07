// import Cards from './Cards';

export const post = (body) => {
  fetch('http://localhost:4444/api/books', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  }).then(() => alert('jest ok'));
};

export const get = () => {
  fetch('http://localhost:4444/api/books')
    .then((res) => res.json())
    // .then((books) => Cards(books))
    .then((books) => console.log(books));
};
