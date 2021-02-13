import { NextFunction, Request, Response } from 'express';

import RegisterDto from './dtos/register.dto';
import { TokenData } from '@modules/auth';
import UserService from './users.service';

export default class UsersController {
  private userService = new UserService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const model: RegisterDto = req.body;
      const tokenData: TokenData = await this.userService.createUser(model);
      res.status(201).json(tokenData);
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const user = await this.userService.getByUserId(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const model: RegisterDto = req.body;
      const user = await this.userService.updateUser(req.params.id, model);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
