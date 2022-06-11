import express from 'express';
import routerProduct from './routes/product.route';
import routerUser from './routes/user.route';
import routerOrder from './routes/order.route';

const app = express();

app.use(express.json());
app.use(routerProduct);
app.use(routerUser);
app.use(routerOrder);

export default app;
