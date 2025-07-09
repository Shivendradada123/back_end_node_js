const { sumreq } = require("./summ");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pretise</title>
        </head>
        <body>
          <h1>Hey, this is a Mauhariya Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (req.url.toLowerCase() === "/calculator") {
    res.write(`
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pretise</title>
        </head>
        <body>
          <h1>Enter Two Numbers multiply</h1>
          <form action="/calculate" method="post">
            <input type="number" placeholder="num1" name="first" />
            <input type="number" placeholder="num2" name="second" />
            <input type="submit" value="Sum" />
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (req.url.toLowerCase() === "/calculate" && req.method === "POST") {
    return sumreq(req, res);
  }

  // Default page if URL not matched
  res.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pretise</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Home</a>
      </body>
    </html>
  `);
  return res.end();
};

exports.requestHandler = requestHandler;
