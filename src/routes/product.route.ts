import { Router } from 'express';
import ProductController from '../controller/product.controller';
import { isValidNameProduct, isValidAmountProduct } from '../middlewares/product.middlware';

const routerProduct = Router();
const product = new ProductController();

routerProduct.get('/products', product.getAll);
routerProduct.post('/products', isValidNameProduct, isValidAmountProduct, product.createProduct);

export default routerProduct;