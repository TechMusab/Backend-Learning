const http = require("http");
const PORT=3000;
const server=http.createServer((req, res) => {
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>Hi Client</body>');
    res.write('</html>');
    res.end();
  }
  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>Hi This is products</body>');
    res.write('</html>');
    res.end();
  }
  else{
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>Hi This is default</body>');
    res.write('</html>');
    res.end();
  }

});

server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});