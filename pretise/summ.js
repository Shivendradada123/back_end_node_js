const sumreq = (req, res) => {
  console.log("In sum Request Handler", req.url);
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const bodystr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodystr);
    const bodyobj = Object.fromEntries(params);
    const result = Number(bodyobj.first) * Number(bodyobj.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang="en">
        <head><meta charset="UTF-8"><title>Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Try Again</a>
        </body>
      </html>
    `);
    return res.end();
  });
};

exports.sumreq = sumreq;


console.log("shvendra mauhariya")
