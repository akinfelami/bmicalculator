const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, function(){
    console.log("Server is online, boi!")
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator.html", function(req, res){

    
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var bmi = Math.floor(weight/Math.pow(height, 2));
    res.send("Your bmi is " + bmi);
})



