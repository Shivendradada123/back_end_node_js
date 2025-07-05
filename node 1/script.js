const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>backend</title></head>");
    res.write("<body><h1 style='color:red'>hey I am Lalu</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/iqoo") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>backend</title></head>");
    res.write("<body><h1 style='color:red'>hey I am ////</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>backend</title></head>");
    res.write("<body><h1 style='color:red'>hey I am Shivendra</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 5500;

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
