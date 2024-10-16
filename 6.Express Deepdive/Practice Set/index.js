const express=require('express');
const contactRouter=require('./routes/contact')
const rootDir=require('./utils/path')
const path=require('path');
const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(contactRouter)
app.use(express.urlencoded({ extended: true }));
app.post("/contact", (req, res) => {
    console.log(req.body)
    res.send("Thanks for submitting your contact");
  });
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
}
)
  
