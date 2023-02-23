import authRouter from './auth.route';
import userRouter from './user.route';
import productRouter from './products.route';
import cartRouter from './cart.route';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/products', productRouter);
    app.use('/api/cart', cartRouter);
  }
}
