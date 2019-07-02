const express = require("express")

const app = express()

app.use(express.static("public"))
app.set('view engine', 'pug')

app.get("/weather", function(req, res){
    res.render(__dirname+"/public/pug/index")
})

app.listen(8880, function(err){
    if(err){
        console.log("Whoops ! Error.")
    }
    console.log("localhost:8880")
})