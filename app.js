import express from 'express';

const app = express();
const router = express.Router();

// CONFIG
const port = 2345;

// DATABASE
const data = [
  { name: 'Joga', age: 3 },
  { name: 'Eryk', age: 13 },
];

// ROUTER
router
  .get('/', (req, res) => {
    res.status(200).send(data);
  })
  .post('/', (req, res) => {
    const dog = req.body;
    if (dog.name && dog.age) {
      data.push(req.body);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  })
  .delete('/:id', (req, res) => {
    data.splice(Number(req.params.id), 1);
    res.status(200).send(data);
  });

// APP
app
  .use(express.static('./front'))
  .use(express.json())
  .use('/api/dogs', router)
  .listen(port, () => console.log(`App listening on http://localhost:${port}`));
