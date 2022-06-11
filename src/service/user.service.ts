import connection from '../models/connection';
import UserInterface from '../interfaces/user.interface';
import UserModel from '../models/user.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: UserInterface): Promise<UserInterface> {
    return this.model.createUser(user);
  }
}