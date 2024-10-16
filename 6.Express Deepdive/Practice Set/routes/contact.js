const express = require("express");
const rootDir=require('../utils/path');
const path=require('path');
const contactRouter = express.Router();
contactRouter.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
module.exports=contactRouter;
