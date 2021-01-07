import express from 'express';
import cors from 'cors';

const app = express();
const router = express.Router();

// CONFIG
const port = 4444;

// DATABASE
const data = [
  {
    title: 'Lśnienie',
    author: 'Stephen King',
    genre: 'horror',
    img: 'lsnienie.jpg',
  },
];

// ROUTER
router
  .get('/', (req, res) => {
    res.status(200).send(data);
  })
  .post('/', (req, res) => {
    const book = req.body;
    data.push(book);
    res.sendStatus(200);
  })
  .delete('/:id', (req, res) => {
    data.splice(Number(req.params.id), 1);
    res.status(200).send(data);
  });

// APP
app
  .use(express.json())
  .use(cors())
  .use(express.static('./front/build'))
  .use('/api/books', router)
  .listen(port, () => console.log(`App listening on http://localhost:${port}`));
