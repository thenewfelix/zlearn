var express = require("express");

var server = express();

server.get("/", function(req, res){
	res.send("This is the homepage");
	//res.write("welcome to the page");
	//res.end();
});

server.get("/contact", function(req, res){
	res.send("This is the contacts page");
});

server.get("/about", function(req, res){
	res.send("This is the about page");
});	

server.use(function(req, res, next, err){
	//console.log(err);
	res.send("Forbidden")

});


server.listen(3000, function() {
	console.log("server is listeniing to port 3000");
});





