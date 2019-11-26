'use strict';

export const  UserQuery = `
type Query {
  persons:[Person]
  user: [User]
  user(id: Int!): user
}`;