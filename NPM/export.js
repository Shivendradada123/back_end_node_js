
const tryserver = ((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/"){
    res.write("<h1> hey shivendra </h1> ")
   return res.end();
  }else if(req.url === "/yaya") {
    res.write("<h1> hey yayay</h1> ");
    return res.end();
  }
  res.write("<h1> hey yayay</h1> ");


});

module.exports = tryserver;