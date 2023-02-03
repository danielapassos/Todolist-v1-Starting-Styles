const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();

const items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", function(req,res){

    let day = date.getDate();

    // let currentDay = today.getDay();
    // const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const day = daysOfTheWeek [currentDay];

    res.render("list", { kindOfday: day, newListItems: items })

});

app.post("/", function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");

})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server started on Port 3000");
})