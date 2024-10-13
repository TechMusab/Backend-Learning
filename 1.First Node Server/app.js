const http = require("http");
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
  // if(req.url==='/'){
  //   res.setHeader('Content-Type','text/html')
  //   res.write('<html>')
  //   res.write('<body>Hi Client</body>');
  //   res.write('</html>');
  //   res.end();
  // }
  // else if(req.url==='/products'){
  //   res.setHeader('Content-Type','text/html')
  //   res.write('<html>')
  //   res.write('<body>Hi This is products</body>');
  //   res.write('</html>');
  //   res.end();
  // }
  // else{
  //   res.setHeader('Content-Type','text/html')
  //   res.write('<html>')
  //   res.write('<body>Hi This is default</body>');
  //   res.write('</html>');
  //   res.end();
  // }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <html>
    <body>
      <h1>Sample Form</h1>
      <form action="/submit" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
      </form>
    </body>
  </html>
`);
    res.end();
  } else if (req.url === "/submit" && req.method === "POST") {
    fs.writeFileSync("user.txt", "Musab Joiya");
    res.statusCode=302
    res.setHeader('Location','/');
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
