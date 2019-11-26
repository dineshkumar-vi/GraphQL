'use strict';

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import dashboard from './dashboard';
import { dashboardQuery } from './query';

const dashboardSchemaDefinition = `
  schema {
    query: Query
  }`;

export const dashboardSchema = makeExecutableSchema({
  typeDefs: [dashboardSchemaDefinition, dashboardQuery, ...dashboard],
  resolvers: resolvers
});