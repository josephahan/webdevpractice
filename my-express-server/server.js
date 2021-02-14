
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello");
})

app.get("/contact", function(req, res){
    //console.log(req);
    res.send("This is the contact page");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});