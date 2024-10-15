import express from "express";
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// app.use(function(req, res,next){
//     console.log(req.method, req.url);
//     next();
// });
// app.use(function(req, res,next){
//     console.log(req.method, req.url);
//     next();
// });
// app.use(function(req, res){

//     res.send("Hello World");
// });
app.get("/", (req, res) => {
  console.log(req.method, req.url);
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  console.log(req.method, req.url);
  res.send(`
    <h1>Contact Us</h1>
    <form action="/contact" method="post">
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
    </form>
  `)
});
app.post("/contact", (req, res) => {
    console.log("Handling contact POST",req.method, req.url);
    res.send("Thanks for submitting your contact");
  });
  
