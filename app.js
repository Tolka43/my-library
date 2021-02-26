import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { sendMail } from './mailer.js';

const app = express();
const booksRouter = express.Router();
const router = express.Router();

// CONFIG
const port = process.env.PORT || 4444;

// DATABASE
const json = fs.readFileSync(path.resolve('./database/books.json'), {
  encoding: 'utf8',
});
const data = JSON.parse(json);

const saveData = () => {
  const stringifiedData = JSON.stringify(data);
  fs.writeFile('./database/books.json', stringifiedData, () =>
    console.log('zapisano')
  );
};

// ROUTER
booksRouter
  .get('/', (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.size);
    const filterOption = Object.keys(req.query.filter)[0];
    const filterValue = req.query.filter && req.query.filter[filterOption];
    const num = page * pageSize - pageSize;
    const sortOption = Object.keys(req.query.sort)[0];
    const sortValue = req.query.sort && req.query.sort[sortOption];

    const filteredBooks = filterValue
      ? data.books.filter(book => filterValue === book[filterOption])
      : data.books;

    filteredBooks.sort((a, b) => {
      const compare = a[sortOption].localeCompare(b[sortOption]);
      return sortValue === 'asc' ? compare : -compare;
    })
    
    const booksPerPage = filteredBooks.slice(num, num + pageSize);

    res.status(200).send({
      books: booksPerPage,
      meta: {
        filteredBooksCount: filteredBooks.length,
        booksCount: data.books.length,
      },
    });
  })
  .post('/', (req, res) => {
    const book = req.body;
    data.books.push(book);
    saveData();
    res.sendStatus(200);
  })
  .delete('/:id', (req, res) => {
    data.books.splice(Number(req.params.id), 1);
    res.status(200).send(data);
  })
  .get('/harry/:par/:asd', (req, res) => {
    console.log(req.params);
    res.status(200).send(data);
  })
  .put('/:id', (req, res) => {
    const i = Number(req.params.id);

    const author = req.body.author;
    const genre = req.body.genre;

    console.log(req.body);

    data.books[i].author = author;
    data.books[i].genre = genre;

    saveData();

    res.sendStatus(200);
  });

router
  .get('*', (req, res) => {
    res.sendFile(path.resolve(`./images/${req.url}`));
  })
  .post('/mail', (req, res) => {
    const mail = req.body.mail;
    sendMail(mail)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

// APP
app
  .use(express.json())
  .use(express.text())
  .use(cors())
  .use(express.static('./front/build'))
  .use('/api/books', booksRouter)
  .use('/api', router)
  .listen(port, () => console.log(`App listening on http://localhost:${port}`));
