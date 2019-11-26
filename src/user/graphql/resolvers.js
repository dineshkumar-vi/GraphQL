'use strict';

import { getAllUser, addUser } from '../services';
 

export const resolvers = {
    Query: {
        members: () => getAllUser().then((data) => data).catch((err) => {
            logger.error('ERROR => Error occured. ', err);
            return null;
        }),
    },
    Mutation: {
        addUser: (_, { firstName, lastName, middleName }) => {
            let reqData = { firstName: firstName, lastName: lastName, middleName: middleName };
            return addMember(reqData).then((data) => data).catch((err) => {
                return null;
            });
        },
        deleteUser: (_, { id, firstName, lastName, middleName }) => {
            let reqData = { memberId: id, firstName: firstName, lastName: lastName, middleName };
            return updateMember(reqData).then((data) => data).catch((err) => {
                 return null;
            });
        }
    }
};