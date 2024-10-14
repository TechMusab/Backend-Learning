const http = require("http");
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
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
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedbody);
      // const bodyfinal={};
      // for(const [key, value] of params.entries()){
      //   bodyfinal[key]=value;
      // }
      //2nd method
      const bodyfinal = Object.fromEntries(params);
      fs.writeFileSync("user.txt", JSON.stringify(bodyfinal));
    });
 
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
