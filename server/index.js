import express from 'express';
import dotnEnv from 'dotenv';
import Routes from './routes';

dotnEnv.config();
const port = process.env.PORT || 3000;
const app = express();

Routes.initRoutes(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/product/:id', (req, res) => {
//   res.send(`Product ${req.params.id} for info`);
// });

// app.get('/products', (req, res) => {
//   const { category } = req.query;
//   res.send(`Products for category: ${category}`);
// });

// app.get('/contact', (req, res) => {
//   res.send('Contact Info');
// });

app.listen(port, () => {
  console.log(
    'Server listening on port 3000 ... ',
  );
});
