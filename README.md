# atix-api

## Technologies

- NodeJS
- Express
- Docker

### Featured dependencies

- winston
- eslint
- cors
- helmet
- morgan
- jest
- supertest
- jsdoc

## Installation

There are to ways to run this project
- Using docker-compose
  - Must have installed the latest version of docker
  - Run `sh start.sh` command 
  
- Using just node
  - Install dependencies `npm i`
  - Run dev script `npm run dev`

You can test the API on the URL http://localhost:3000/api/messages

Payload
----
```json 
{
    "message":"Hola Mundo"
}
```

Expected output
----
```json 
statusCode: 200
{
    "success": true
}
```

