import { Route } from '@core/interfaces';
import { Router } from 'express';
import AuthController from './auth.controller';
export default class AuthRoute implements Route {
  public path = '/api/auth';
  public router = Router();

  public authController = new AuthController();

  constructor() {
    this.initializerRoutes();
  }

  private initializerRoutes() {
    this.router.post(this.path, this.authController.login); //POST: http://localhost:5000/api/auth
  }
}
