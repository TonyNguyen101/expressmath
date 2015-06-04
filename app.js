var express = require("express");
var app = express();

app.set("view engine", "ejs");

/*app.get("/add/:num1/:num2/", function(req, res){
	var sum = Number(req.params.num1) + Number(req.params.num2);
	res.render("index", {math: sum});
});

app.get("/sub/:num1/:num2/", function(req, res){
	var diff = Number(req.params.num1) - Number(req.params.num2);
	res.render("index", {math: diff});
});

app.get("/mult/:num1/:num2/", function(req, res){
	var product = Number(req.params.num1) * Number(req.params.num2);
	res.render("index", {math: product});
});

app.get("/div/:num1/:num2/", function(req, res){
	var quotient = Number(req.params.num1) / Number(req.params.num2);
	res.render("index", {math: quotient});
});*/

//Refactored 
app.get("/:whatever/:num1/:num2/", function(req, res){
	var quotient = Number(req.params.num1) / Number(req.params.num2);
	var sum = Number(req.params.num1) + Number(req.params.num2);
	var diff = Number(req.params.num1) - Number(req.params.num2);
	var product = Number(req.params.num1) * Number(req.params.num2);
	var whatever = req.params.whatever;

	//put all the res.render into its own function 
	function renderer(input){
		return res.render("index", {math: input});
	}

	if (whatever === "add"){
		renderer(sum);
	}
	else if (whatever === "sub"){
		renderer(diff);	
	}
	else if (whatever === "mult"){
		renderer(product);	
	}
	else if (whatever === "div"){
		renderer(quotient);	
	}	
});
//Listening to port 8050.3
app.listen(8050, function(){
	console.log("Server to start on port 8050");
});    