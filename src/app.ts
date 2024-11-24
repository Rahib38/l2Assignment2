import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { bikeRouter } from './app/config/modules/bike model/bike.route';
import { oderRoute } from './app/config/modules/order model/order.route';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', bikeRouter);
app.use('/api/orders', oderRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
