var express = require("express")

var server = express()


var records = {
	"001": {
		firstName: "Sola",
		lastName: "Adesokan",
		age: 17
	},

	"002": {
		firstName: "Dami",
		lastName: "Yinka",
		age: 19
	},

	"003": {
		firstName: "Yusuf",
		lastName: "Badmus",
		age: 23
	},

	"004": {
		firstName: "Faith",
		lastName: "Opejobi",
		age: 20
	},

	"005": {
		firstName: "Praise",
		lastName: "Obodo",
		age: 22
	},

	"006": {
		firstName: "Felix",
		lastName: "Predator",
		age: 21
	},

	"007": {
		firstName: "Taizai",
		lastName: "Gowther",
		age: 16
	},

	"008": {
		firstName: "Kakashi",
		lastName: "Hatake",
		age: 23
	},

	"009": {
		firstName: "Obinna",
		lastName: "Ejiofor",
		age: 20
	},

	"010": {
		firstName: "Gancho",
		lastName: "Meliodas",
		age: 18
	},
	
}; 
//First one done @ /students/create/001/David/Sanda/12
server.get("/students/create/:matNo/:firstName/:lastName/:age", function (req,res){
	var matNo = req.params.matNo
	var firstName = req.params.firstName
	var lastName = req.params.lastName
	var age = req.params.age
	var create = records[matNo, firstName, lastName, age]
	var students = records[create]
/*	if(!create){
		res.send("You haven't registered as a student")
	}
	else{
		res.send("Your Data "+ matNo +" and "+ lastName +"has been saved")
	}*/
	if(matNo in records){
		res.send("Matric number already exists")
	}
	else{
		res.send("Data accepted")
	}
})
//Second one @ /students/0001





//This is the last one 'delete'
server.get("/students/delete/:matNo", function(req, res){
	var matNo = req.params.matNo
	delete records[item]

	res.send("The item has been deleted")
})


server.listen(3000, function (){
	console.log("Listening to port 3000")
})











