const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var items = [];
var workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.get("/", function(rec, res){
    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});

    app.post("/", function(req, res){
        var item = req.body.newItem;
        
        if (req.body.list === "Work"){
            workItems.push(item);
            res.redirect("/work");
        }
        else{
        items.push(item);
        //redirects response to the get method do execute render there
        res.redirect("/");
        }
    });

    //code that renders ejs for weekday or weekend
    /*var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0){
        day = "weekend";
        res.render("list", {kindOfDay: day});
    }
    else{
        day = "weekday";
        res.render("list", {kindOfDay: day});
    };*/
});


app.get("/work", function(rec, res){
    res.render("list",{listTitle: "Work List", newListItems: workItems});
    /*
    app.post("/work", function(rec, res){
        var item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");
    })*/
});

app.get("/about", function(rec, res){
    res.render("myabout");
});





app.listen(3000, function(){
    console.log("server started on port 3000");
});
