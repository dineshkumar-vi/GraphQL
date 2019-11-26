Graphql API


## Project description
 
 Sample graphQL service wrapped  with Apollo Server


## Running the Project

After fetching the project files, execute `npm install` in order to get
all the package dependencies for the project then the following files need
to be modified with the correct values depending on the environment:

```
  Provide environment variable value in .env file. For an example SERVER_PORT and SOAP_WSDL_URL etc
```
Once the above files are modified, the following run scripts are available:

- `npm start`: start the application. The application
  can be accessed from [http://localhost:$SERVER_PORT/graphql](http://localhost:$SERVER_PORT/graphql).

## Running Tests

All test files are placed under the __\_\_tests\_\___ sub-folder of each component.

To run the tests execute `npm test`
To generate the test coverage report execute `npm test`

## ESLint Code Quality Checks

The project has ESLint configured to perform code quality checks, available
start scripts:

- `npm run elint`: Run the ESlint scanner and provide detailed results.
- `npm run elint:summary`: Run ESlint scanner and provide a formatted summary
    of the scan result.
- `npm run elint:table`: Run the ESlint scanner and provide a table view of
    the results.


## Dependencies

### Production Packages

| Package                                       | Category         | Description                                       |
|-----------------------------------------------|------------------|---------------------------------------------------|
| apollo-server-express                         | Server           | Apollo GraphQL Server for node express            |
| bluebird                                      | Utility          | Promises Functions                                |
| express                                       | HTTP Server      | Public HTTP APIs                                  |
| dotenv                                        | Utility          | Loads environment variables from .env file        |
| graphql<br/> graphql-tools                    | Data Access      | GraphQL integration                               |
| lodash                                        | Utility          | Utility Functions                                 |
| soap                                          | Client           | Node SOAP client                                  |

### Development Dependencies

| Package                                               | Category       | Description                            |
|-------------------------------------------------------|----------------|----------------------------------------|
| babel-cli<br/>  babel-core<br/>  babel-preset-env     | Tool           | ECMAScript 2015+ compatibility tool    |
| nodemon                                               | Tool           | Monitoring tool                        |
| eslint                                                | Tool | ESLint code quality checker tools |



