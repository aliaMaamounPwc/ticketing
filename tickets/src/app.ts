import express from 'express';
import { json } from 'body-parser';
import cookiesSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketsRouter } from './routes';
import { updateTicketRouter } from './routes/update';

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
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketsRouter);
app.use(updateTicketRouter);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };