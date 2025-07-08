const http = require('http')
const { requestHandler } = require("./incomer");

const server = http.createServer(requestHandler);

const PORT = 5000;
server.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}`);
})
