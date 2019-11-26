import { RESTDataSource } from 'apollo-datasource-rest';

export class PersonRestAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8090/';
    }

    async getPersons() {
        const result = await this.get(`getpersons`);
        return result && result.persons ? result.persons : []
    }
}