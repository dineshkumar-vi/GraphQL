'use strict';

import { getAllDashboard } from '../services';

export const resolvers = {
    Query: {
        dashboard: () => getAllDashboard().then((data) => data).catch((err) => {
            console.log('ERROR => Error occured. ', err);
            return null;
        })
    },

};