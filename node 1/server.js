// Simple Node.js server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});
const PORT = 5500;
server.listen(PORT , () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});