'use strict';

export const UserMutation = `
type Mutation {
  getUser(firstName: String, lastName: String, middleName: String): Member,
  addUser(id: Int!, firstName: String, lastName: String, middleName: String): Member,
  deleteUser(id: Int!): Boolean
}`;
