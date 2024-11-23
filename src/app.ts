import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { bikeRouter } from './app/config/modules/bike model/bike.route';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', bikeRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
