import express from "express"
const app=express();
const jokes = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      id: 2,
      setup: "What do you call fake spaghetti?",
      punchline: "An impasta!"
    },
    {
      id: 3,
      setup: "Why was the math book sad?",
      punchline: "It had too many problems."
    },
    {
      id: 4,
      setup: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese!"
    },
    {
      id: 5,
      setup: "Why don’t skeletons fight each other?",
      punchline: "They don’t have the guts."
    }
  ];
// app.get('/', function(req, res){
//     res.send("Hello World");
// });
app.get('/api/jokes', function(req, res){
res.send(jokes);
})

const port=process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})