// 1. Express ko import karo
const express = require("express");

// 2. Express app banao
const app = express();

// 3. Home Page Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page, Shivendra!");
});

// 4. About Page Route
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

// 5. Contact Page Route
app.get("/contact", (req, res) => {
  res.send("Contact Shivendra at: 1234567890");
});

// 6. Dynamic Route (with parameter)
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID you entered is: ${userId}`);
});

// 7. 404 Route (Last Me Likho)
app.get("*", (req, res) => {
  res.send("404 - Page Not Found");
});

// 8. Server ko chalu karo
app.listen(3000, () => {
  console.log("✅ Server chal raha hai: http://localhost:3000");
});
