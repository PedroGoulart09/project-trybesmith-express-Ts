import { Request, Response } from 'express';
import OrderService from '../service/order.service';
import ProductService from '../service/product.service';

export default class OrderController {
  constructor(
    private orderService = new OrderService(),
    private productService = new ProductService(),
  ) {}

  public getAllOrder = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrder();
    const products = await this.productService.getAll();
    const result = orders.map(({ id, userId }) => (
      {
        id,
        userId,
        productsIds: products
          .filter((item) => item.orderId === id)
          .map((item) => item.id),
      }
    ));
    return res.status(200).json(result);
  };
}