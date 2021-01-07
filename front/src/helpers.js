export const post = (body) => {
  fetch('http://localhost:4444/api/books', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(body),
  });
};