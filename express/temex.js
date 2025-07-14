
const express = require("express");


const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Step 4: Server चलाओ
app.listen(3001, () => {
  console.log("http://localhost:3001/");
});
  

//this is a small example of  express

