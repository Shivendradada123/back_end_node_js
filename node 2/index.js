const http = require("http");

const quotes = [
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn't come to you. You go to it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "If you can dream it, you can do it. – Shivendra 😉",
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/quote") {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    res.write(`
      <h1>🔥 Your Random Quote</h1>
      <p>${randomQuote}</p>
      <br>
      <a href="/quote">Get Another Quote</a>
    `);
    return res.end();
  }

  // Homepage
  res.write(`
    <h1>Welcome to Shivendra's Quote Server</h1>
    <p><a href="/quote">Click here to get a random quote</a></p>
  `);
  res.end();
});

server.listen(3001, () => {
  console.log("🚀 Server running at http://localhost:3001");
});
