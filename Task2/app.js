const express = require('express');

const app  = express();
const port = 8080;

app.use(express.static('./public'));

app.get('/form', function (req,res) 
{
    res.sendFile(__dirname +'/public/form.html')
})

app.get('/formResponse', function (req,res) 
{
    response = 
    {
        firstName : req.query.fname,
        lastName : req.query.lname,
        mail : req.query.email,
        telephone : req.query.tel,
        message : req.query.message,
    }
    console.log(response);
    res.end(JSON.stringify(response))
})

app.listen(port);

console.log('localhost:8080');