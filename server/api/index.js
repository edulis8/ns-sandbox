import { Router } from 'express';

import users from './users';
import restlet from './restlet';

const app = Router();

app.use('/users', users);
app.use('/restlet', restlet);

export default app;
