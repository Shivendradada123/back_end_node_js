const http = require("http");


const server = http.createServer((req, res) => {
console.log(req.url, req.headers)

if (req.url === "/") {
  res.write("  <h1>shivendra mauhariya</h1>");
  return res.end();
} else if (req.url === "/sk") {
  res.write("  <h1>shivendra </h1>");
  return res.end();
} else {
  res.statusCode = 404;
  res.write("<h1>Page Not Found</h1>");
  return res.end();
}

});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


console.log("Shivendra mauhariya")