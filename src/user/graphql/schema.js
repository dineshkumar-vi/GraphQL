'use strict';

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { userQuery } from './query';
import { userMutation } from './mutation';
import { Person } from './person';
import { user } from './user';

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }`;

export const memberSchema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, userQuery, userMutation, Person, user],
  resolvers: resolvers
});
