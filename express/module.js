const http = require('http');

const express = require('express')

const handlerra = require('./app')


const app = express();
  
const server = http.createServer(express);


server.listen(5500, () => {
  console.log("Server running at http://localhost:5500");
});
