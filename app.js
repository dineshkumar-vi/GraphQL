'use strict';

import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { initSoap } from './src/user/services';
import { RedisCache } from 'apollo-server-redis';
import { PersonRestAPI } from './src/dashboard/datasource';
import { dashboardSchma } from './src/dashboard/graphql/schema';
import { userSchema } from './src/user/graphql/schema';
 
import { mergeSchemas } from 'graphql-tools';

//load the environment config variables
const envConfig = dotenv.config();


//initialize the soap client
initSoap();

const schema = mergeSchemas({ schemas: [
                                          memberSchema,
                                          providerSchema
                                        ] });
let options = {
  schema: schema
};
//cache enable check
if (process.env.CACHE_ENABLED === 'true') {
  options = {
    schema: schema,
    tracing: true,
    cacheControl: {
      defaultMaxAge: 600,
      stripFormattedExtensions: false,
      calculateCacheControlHeaders: false
    },
    dataSources: () => {
      return {
        personRestAPI: new PersonRestAPI(),
      };
    },
    cache: new RedisCache({
      connectTimeout: 5000,
      reconnectOnError: (err) => {
              let targetError = 'READONLY'
        if (err.message.slice(0, targetError.length) === targetError) {
          // Only reconnect when the error starts with "READONLY"
          return true
        }
      },
      retryStrategy: (times) => {
        logger.info('Redis Retry', times);
        if (times >= 3) {
          return undefined
        }
        var delay = Math.min(times * 50, 2000)
        return delay
      },
      socket_keepalive: false,
      host:
        process.env.IS_OFFLINE === 'true'
          ?
          '127.0.0.1'
          :
          process.env.REDIS_HOST,
      port:
        process.env.IS_OFFLINE === 'true'
          ?
          6379
          :
          parseInt(process.env.REDIS_PORT),
      password:
        process.env.IS_OFFLINE === 'true' ?
          ''
          :
          process.env.REDIS_PASSWORD,
    })
  }
}

export const server = new ApolloServer(options);
export const app = express();

server.applyMiddleware({
  app,
  cors: {
    origin: '*',
    credentials: true,
  }
});