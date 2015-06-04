var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/add/:num1/:num2/", function(req, res){
	var sum = Number(req.params.num1) + Number(req.params.num2);
	res.render("index", {math: sum});
});


app.listen(8050, function(){
	console.log("Server to start on port 8050");
});    