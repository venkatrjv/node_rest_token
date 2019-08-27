# Node Rest API Token
RestFull token based api

## Run server

Run `node app.js` to start the server. URL will be to `http://localhost:4222/`. 

## Running unit tests

Run `npm test` to execute the unit tests via [mocha]

## Mysql configuration

*before execute the application configure mysql connection in "./configuration/dbConfig.js" file*

## Mysql query 

locate file "mysql-query.sql" to execute the mysql queries


## API call's:

get - http://localhost:4222/user -> to get all the users

post - http://localhost:4222/user -> to post user
JSON body:
{
    "fName": "string",
    "lName": "string",
    "email": "string/email",
    "gender": "[Male/Female]"
}