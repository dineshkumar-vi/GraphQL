'use strict';

import { app, server } from './app';

app.listen({ port: process.env.SERVER_PORT }, () =>
  logger.info(`INFO => Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
);