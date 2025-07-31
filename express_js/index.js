
const express = require("express");
const app = express(); 

// Middleware 
app.use((req, res, next) => {
  console.log("Middleware chal raha hai:", req.method, req.url);
  next(); 
});


app.use((req, res, next) => {
  console.log("Code successfully run:", req.url, req.method);
  res.send("<p>Hey, I am Shivendra  this is my second Express code...</p>");
});


const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
