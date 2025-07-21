

const fs = require("fs");


const handeler = ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>Welcome to mauhariya </h1>");

    res.write('<form action="/submit-details" method="POST">');

    
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );

    
    res.write('<label for="gender">Gender:</label>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    // Submit button
    res.write('<button type="submit">Submit</button>');

    res.write("</form>");

    return res.end();
  }


  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
   
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      const parm = new URLSearchParams(parsebody);
      // const bodyob = Object.fromEntries
      // console.log(bodyob);
 const jsonobject = {};
 for (const [key, value] of parm.entries()) {
  jsonobject[key] = value
 }

      fs.writeFileSync("user.txt", JSON.stringify(parsebody));

      res.setHeader("Location", "/");
      res.statusCode = 302;
      return res.end();

     
    });
  } 
});

module.exports = handeler;