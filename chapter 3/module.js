const http = require('http');
const handlerra = require('./app')
  
const server = http.createServer(handlerra);


server.listen(5500, () => {
  console.log("Server running at http://localhost:5500");
});
