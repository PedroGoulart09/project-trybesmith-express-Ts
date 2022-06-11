import OrderModel from '../models/order.model';
import OrderInterface from '../interfaces/order.interface';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<OrderInterface[]> {
    return this.model.getAllOrders();
  }
}