const add=require('./addition');
const handler=(req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to calculator Page</h1>');
        res.write('<a href="/calculator">Calculator</a><br>');
        res.end();
    }
    else if (req.url==='/calculator'){
        res.write('<h1>Calculator</h1>');
        res.write('<form method="POST" action="/calculator-result">');
        res.write('<input type="number" name="num1" placeholder="Enter first number">');
        res.write('<input type="number" name="num2" placeholder="Enter second number">');
        res.write('<button type="submit">Add</button>');
        res.write('</form>');
        res.end();
    }
    else if(req.url==='/calculator-result' && req.method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsed=Buffer.concat(body).toString();
            const params=new URLSearchParams(parsed);
            const data=Object.fromEntries(params);
            const num1=parseInt(data.num1);
            const num2=parseInt(data.num2);
            const result=add(num1,num2);
            res.write(`<h1>Result is ${result}</h1>`);
            res.end();
        })
    }

}
module.exports = handler