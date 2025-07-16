const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware chal raha hai:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page par ho tum!");
});

app.get("/about", (req, res) => {
  res.send("About Page par ho tum!");
});


//  Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//end 
console.log("shivendra ")