import { validateEnv } from '@core/utils';
import 'dotenv/config';
import App from './app';
import { IndexRoute } from '@modules/index';
import AuthRoute from '@modules/auth/auth.route';
import { UsersRoute } from '@modules/users';

validateEnv();

const routes = [new IndexRoute(), new AuthRoute(), new UsersRoute()];

const app = new App(routes);

app.listen();
