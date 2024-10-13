const http = require("http");

const server=http.createServer((req, res) => {
  console.log(req.url, req.headers, res.method);
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<body>Hi Client</body>');
  res.write('</html>');
  res.end();
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});