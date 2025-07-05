const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/home") {
    res.write("<h1>shivendra mauahriya</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>shivendra lalu</h1>");
    return res.end();
  }

  // Default page with proper links
  res.write(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/home">home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/bacche">bacche</a></li>
                <li><a href="/cart">cart</a></li>
            </ul>
        </nav>
    </body>
    </html>
  `);
  res.end();
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
