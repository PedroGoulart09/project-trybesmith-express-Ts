import connection from '../models/connection';
import ProductModel from '../models/product.model';
import ProductInterface from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<ProductInterface[]> {
    return this.model.getAll();
  }

  public async createProduct(product: ProductInterface): Promise<ProductInterface> {
    return this.model.createProduct(product);
  }
}