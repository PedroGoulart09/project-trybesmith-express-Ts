import { Request, Response } from 'express';
import ProductService from '../service/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const product = await this.productService.getAll();
    return res.status(200).json(product);
  };

  public createProduct = async (req: Request, res:Response) => {
    const product = await this.productService.createProduct(req.body);
    return res.status(201).json(product);
  };
}