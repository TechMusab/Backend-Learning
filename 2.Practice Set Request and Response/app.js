const http=require("http")
http.createServer((req,res)=>{
if(req.url==='/'){
    res.write('<a href="/home">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/services">Services</a> | <a href="/portfolio">Portfolio</a>')
    res.end();
}
else if(req.url==='/home'){
    res.write('<h1>Welcome to Home Page</h1>')
    res.end();
}
else if(req.url==='/about'){
    res.write('<h1>Welcome to About Page</h1>')
    res.end();
}
else if(req.url==='/contact'){
    res.write('<h1>Welcome to Contact Page</h1>')
    res.end();
}
else if(req.url==='/services'){
    res.write('<h1>Welcome to Services Page</h1>')
    res.end();
}
else if(req.url==='/portfolio'){
    res.write('<h1>Welcome to Portfolio Page</h1>')
    res.end();
}
else{
    res.write('<h1>Page Not Found</h1>')
    res.end();
}
}).listen(3000,()=>{
    console.log("Server is running on port 3000")
})


