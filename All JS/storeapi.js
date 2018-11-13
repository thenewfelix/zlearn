var express = require("express")

var server = express()


var store = {
	"pen": 50,
	"book": 100,
	"hat": 500,
	"phone": 10000,
	
};

server.get("/price/:itemName", function (req, res){
	var item = req.params.itemName.toLowerCase()
	var price = store[item]
	if(!price){
		res.send("The item is not in stock")
	}
	else{
		res.send("The price of the "+ item +" is " + price)
	}
});

server.get("/admin/price/:itemName/:newPrice", function(req, res){
	var item = req.params.itemName
	var newPrice = +req.params.newPrice

	store[item] = newPrice

	res.send("The new price of " + item + " is " + newPrice)
});

server.get("/admin/delete/:itemName", function(req, res){
	var item = req.params.itemName.toLowerCase()
	delete store[item]

	res.send("The" + item + "item has been deleted")
});

server.listen(3000, function (){
	console.log("Listening to port 3000")
});


