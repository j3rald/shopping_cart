import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('user info');
});

userRouter.post('/', (req, res) => {
  res.send('user add');
});

userRouter.put('/:id', (req, res) => {
  res.send('user update');
});

userRouter.delete('/:id', (req, res) => {
  res.send('user remove');
});

export default userRouter;
