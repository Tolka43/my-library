import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const booksRouter = express.Router();
const router = express.Router();

// CONFIG
const port = 4444;

// DATABASE
const json = fs.readFileSync(path.resolve('./database.json'), {
  encoding: 'utf8',
});
const data = JSON.parse(json);

// ROUTER
booksRouter
  .get('/', (req, res) => {
    res.status(200).send(data);
  })
  .post('/', (req, res) => {
    const book = req.body;
    data.books.push(book);
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

    data.books[i].author = author;
    data.books[i].genre = genre;
    res.sendStatus(200);
  });

router.get('*', (req, res) => {
  res.sendFile(path.resolve(`./images/${req.url}`));
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
