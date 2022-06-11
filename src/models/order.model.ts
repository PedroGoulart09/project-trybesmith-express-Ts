import { Pool } from 'mysql2/promise';
import OrderInterface from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<OrderInterface[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [rows] = result;
    return rows as OrderInterface[];
  }
}