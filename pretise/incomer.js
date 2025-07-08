const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>pretise</title>
            </head>
            <body>
                <h1>Hey, this is a Mauhariya Calculator</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
            </html>
        `);
    return res.end();
  } else if(req.url.toLowerCase() === "/calculator") {
     res.setHeader("Content-Type", "text/html");
     res.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>pretise</title>
            </head>
            <body>
                <h1></h1>
                <a href="/calculator">Go to Calculator</a>
                 <form action="/calculate" method="post">
            <input type="number" placeholder="num1" name="1st">
            <input type="number" placeholder="num2" name="2nd">
            <input type="submit" value="submit">
            
        </form>
            </body>
            </html> `);
  }

  res.write(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>pretise</title>
        </head>
        <body>
            <h1>Hey, this is a different page</h1>
            <a href="/">Go Home</a>
        </body>
        </html>
    `);

  return res.end();
};

exports.requestHandler = requestHandler;
