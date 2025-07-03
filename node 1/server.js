// // Simple Node.js server
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
// });
// const PORT = 5500;
// server.listen(PORT , () => {
//     console.log(`Server is running on address http://localhost:${PORT}`);
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// const http = require('http');

// const server = http.createServer((req, res) => {

//   res.setHeader('Content-Type', 'text/html');


//   res.write('<html>');
//   res.write('<head><title>backend</title></head>');
//   res.write("<body><h1 style='color:red'>hey I am Shivendra</h1></body>");
//   res.write('</html>');


//   res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <title>Shivendra's Server</title>
        <style>
          body {
            background: #282c34;
            color: #fff;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
          }
          h1 { color: #61dafb; }
        </style>
      </head>
      <body>
        <h1>Hello from Node.js 👋</h1>
        <p>🚀 Built by Shivendra using raw HTTP module</p>
      </body>
    </html>
  `);
    res.end();
  })
  .listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
  });

