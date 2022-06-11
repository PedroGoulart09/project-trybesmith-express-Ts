import { Request, Response } from 'express';
import UserService from '../service/user.service';
import generateToken from '../utils/generateJWT';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => {
    const create = await this.userService.createUser(req.body);
    const token = generateToken(JSON.stringify(create));
    return res.status(201).json({ token });
  };
}