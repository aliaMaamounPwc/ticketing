import express from 'express';
import { json } from 'body-parser';
import cookiesSession from 'cookie-session';
import { createChargeRouter } from './routes/new';

import { errorHandler, NotFoundError, currentUser } from '@amnodejstickets/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookiesSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);
app.use(createChargeRouter);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
