import { Router } from 'express';
import OrderController from '../controller/order.controller';

const routerOrder = Router();
const order = new OrderController();

routerOrder.get('/orders', order.getAllOrder);

export default routerOrder;