const http = require("http");
const tryserver = require("./export");

const server = http.createServer(tryserver);


const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


console.log("Shivendra mauhariya")