'use strict';

export const ProviderQuery =`
type Query {
    dashboard: [Dashboard]
    dashboard(user: String!): [Dashboard]
}`;