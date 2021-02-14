
const express = require("express") //this is to incorporate the express package.
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/secret", function(req, res){
	res.send("this is the secret route")
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2
    res.send("The result of the calculation is: " + result)
})