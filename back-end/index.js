const express = require('express');
const http = require('http');

const hostname="localhost";
const port=3001;

const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors({
    origin      : `http://${hostname}:3000`,
    credentials : true
}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin',`http://${hostname}:3000`),
    res.setHeader('Access-Control-Allow-Credentials', 'true'),
    res.setHeader('Access-Control-Allow-Methods','GET,HEAD,OPTIONS,POST,PUT,DELETE'),
    res.setHeader('Access-Control-Allow-Headers','Access-Control-Allow-Headers,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'),
    res.setHeader('Cache-Control','no-cache'), 
    
    next()
});

app.post('/calculate',function(req,res) {

    console.log("POST request is called....");

    var x = req.body.op1;
    var y = req.body.op2;
    var op = req.body.op;


    console.log("operand1 = " + x + "   operand2 = " + y + "   operator = " + op);

    // if(op == '+') {
    //     ans = x + y;
    // }
    // else if(op == '-') {
    //     ans = x - y;
    // }
    // else if(op == '*') {
    //     ans = x * y;
    // }
    // else if(op == '/') {
    //     ans = x / y;
    // }

    // console.log("Answer = " + ans);
    
    // var data = { 
    //     result: ans,
    //     status: 200  
    // }
    // res.send(JSON.stringify(data));

});




const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`)
});