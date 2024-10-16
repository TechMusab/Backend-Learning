import express from 'express';
const adminRouter=express.Router();
adminRouter.get('/add-home',(req,res)=>{
    res.send(`
    <h1>Add Home</h1>
    <form action="/add-home" method="post">
        <input type="text" name="title" placeholder="Title" required/>
        <input type="text" name="location" placeholder="Location" required/>
        <input type="text" name="price" placeholder="Price" required/>
        <button type="submit">Add Home</button>
    </form>
    `);
});
adminRouter.post('/add-home',(req,res)=>{
    res.send(`
    Home added
    <a href="/"> Go to Home </a>
    `);
});
export default adminRouter