import { Pool, ResultSetHeader } from 'mysql2/promise';
import ProductInterface from '../interfaces/product.interface';

export default class Product {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ProductInterface[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as ProductInterface[];
  }

  public async createProduct(product: ProductInterface): Promise<ProductInterface> {
    const { name, amount } = product;
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}