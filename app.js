import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const booksRouter = express.Router();
const router = express.Router();

// CONFIG
const port = process.env.PORT || 4444;

// DATABASE

const options = { encoding: 'utf8' };

const booksJson = fs.readFileSync(
  path.resolve('./database/books.json'),
  options
);
const books = JSON.parse(booksJson);

const authorsJson = fs.readFileSync(
  path.resolve('./database/authors.json'),
  options
);
const authors = JSON.parse(authorsJson);

console.log(authors);

const saveData = () => {
  const stringifiedData = JSON.stringify(books);
  fs.writeFile('./database/books.json', stringifiedData, () =>
    console.log('zapisano')
  );
};

// ROUTER
booksRouter
  .get('/', (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.size);
    const filterOption = req.query.filter && Object.keys(req.query.filter)[0];
    const filterValue = req.query.filter && req.query.filter[filterOption];
    const num = page * pageSize - pageSize;
    const sortOption = req.query.sort && Object.keys(req.query.sort)[0];
    const sortValue = req.query.sort && req.query.sort[sortOption];

    const booksWithAuthors = books.books.map(book => {
      const author = authors.authors.find(
        author => book.authorId === author.id
      );
      return { ...book, author };
    });

    const filteredBooks = filterValue
      ? booksWithAuthors.filter(book => {
          switch (filterOption) {
            case 'author': {
              return filterValue === book.author.surname;
            }
            case 'id': {
              const stringifyIds = filterValue.split(',');
              return stringifyIds.includes(String(book.id));
            }
            default: {
              return filterValue === book[filterOption];
            }
          }
        })
      : booksWithAuthors;

    console.log(filterOption, filterValue);

    if (filteredBooks.length > 1 && sortOption) {
      filteredBooks.sort((a, b) => {
        const compare =
          sortOption === 'author'
            ? a.author.surname.localeCompare(b.author.surname)
            : a[sortOption].localeCompare(b[sortOption]);
        return sortValue === 'asc' ? compare : -compare;
      });
    }

    const booksPerPage =
      page && pageSize
        ? filteredBooks.slice(num, num + pageSize)
        : filteredBooks;

    res.status(200).send({
      books: booksPerPage,
      meta: {
        filteredBooksCount: filteredBooks.length,
        booksCount: books.books.length,
      },
    });
  })
  .post('/', (req, res) => {
    const book = req.body;
    books.books.push(book);
    saveData();
    res.sendStatus(200);
  })
  .delete('/:id', (req, res) => {
    books.books.splice(Number(req.params.id), 1);
    res.status(200).send(books);
  })
  .get('/harry/:par/:asd', (req, res) => {
    console.log(req.params);
    res.status(200).send(books);
  })
  .put('/:id', (req, res) => {
    const i = Number(req.params.id);

    const author = req.body.author;
    const genre = req.body.genre;

    console.log(req.body);

    books.books[i].author = author;
    books.books[i].genre = genre;

    saveData();

    res.sendStatus(200);
  });

router
  .get('*', (req, res) => {
    console.log(req.url)
    res.sendFile(path.resolve(`./images/${req.url}`));
  })

// APP
app
  .use(express.json())
  .use(express.text())
  .use(cors())
  .use(express.static('./front/build'))
  .use('/api/books', booksRouter)
  .use('/api', router)
  .listen(port, () => console.log(`App listening on http://localhost:${port}`));
