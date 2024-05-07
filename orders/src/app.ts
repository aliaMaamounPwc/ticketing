import express from 'express';
import { json } from 'body-parser';
import cookiesSession from 'cookie-session';
import { deleteOrderRouter } from './routes/delete';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';
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
app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(newOrderRouter);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
