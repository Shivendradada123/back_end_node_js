// // // Simple Node.js server
// // const http = require('http');

// // const server = http.createServer((req, res) => {
// //   console.log(req);
// // });
// // const PORT = 5500;
// // server.listen(PORT , () => {
// //     console.log(`Server is running on address http://localhost:${PORT}`);
// // });

// // const http = require('http');

// // const server = http.createServer((req, res) => {
// //   console.log(req.url, req.method, req.headers);
// // });

// // const PORT = 3000;
// // server.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });

// // const http = require("http");

// // http.createServer((req, res) => {
// //     res.setHeader("Content-Type",

// //        "text/html");
// //     res.write(`
// //     <html>
// //       <head>
// //         <title>Shivendra's Server</title>
// //         <style>
// //           body {
// //             background: #282c34;
// //             display: flex;
// //             justify-content: center;
// //             align-items: center;
// //             height: 100vh;

// //           }
// //           h1 { color: #61dafb; }
// //         </style>
// //       </head>
// //       <body>
// //         <h1> 👋 hey i am Shivendra</h1>
// //         <p> hey i am mauhariya</p>
// //       </body>
// //     </html>
// //   `);
// //     res.end();
// //   })
// //   .listen(3000, () => {
// //     console.log("yes working fine");
// //   });

// //

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/html");

//     res.write("<h1>Welcome to Home page</h1>");

//     res.write('<form action="/" method="POST">');

//     // Name input
//     res.write(
//       '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
//     );

//     // Gender radio buttons
//     res.write('<label for="gender">Gender:</label>');

//     res.write('<input type="radio" id="male" name="gender" value="male">');
//     res.write('<label for="male">Male</label>');

//     res.write('<input type="radio" id="female" name="gender" value="female">');
//     res.write('<label for="female">Female</label><br><br>');

//     // Submit button
//     res.write('<button type="submit">Submit</button>');

//     res.write("</form>");

//     return res.end();
//   }

//   // Optional: Handle forsubmi6tm submission (just display a message for now)
//   else if ( req.method === "POST" && req.url.toLowerCase() === '/submit-details') {
    
//     fs.writeFileSync("user.txt", "Shivendra mauhariya");
//     res.statusCode = 303;
//     res.setHeader("Location", "/");
    

//     return res.end();
//   }
// });

// server.listen(5500, () => {
//   console.log("Server running at http://localhost:5500");
// });
 

 