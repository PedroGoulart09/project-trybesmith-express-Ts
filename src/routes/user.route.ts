import { Router } from 'express';
import UserController from '../controller/user.controller';
import { isValidUserName, isValidClass,
  isValidPassword, isValidLevel } from '../middlewares/user.middlware';

const routerUser = Router();
const user = new UserController();

routerUser.post(
  '/users', 
  isValidUserName,
  isValidClass, 
  isValidLevel,
  isValidPassword,
  user.createUser,
);

export default routerUser;