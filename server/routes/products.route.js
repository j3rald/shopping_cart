import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.send('products info');
});

productsRouter.post('/', (req, res) => {
  res.send('products add');
});

productsRouter.put('/:id', (req, res) => {
  res.send('products update');
});

productsRouter.delete('/:id', (req, res) => {
  res.send('products delete');
});

export default productsRouter;
