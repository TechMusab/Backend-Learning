import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <form action="/contact" method="post">
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
    </form>
  `)
});
app.use(bodyParser.urlencoded());
app.post("/contact", (req, res) => {
    console.log("Handling contact POST",req.method, req.url, req.body);
    res.send("Thanks for submitting your contact");
  });
  
