var express = require("express")

var server = express()
server.get("/add/:a/:b", function  (req, res){
	//console.log(req.params)
	var firstNumber = +req.params.a
	var secondNumber = +req.params.b
	var total = firstNumber + secondNumber
	res.end("" + total)
})

server.get("/sub/:a/:b", function (req, res){
	var firstNumber = +req.params.a
	var secondNumber = +req.params.b
	var total = firstNumber - secondNumber
	res.end("" + total)
})

server.get("/mul/:a/:b", function (req, res){
	var firstNumber = +req.params.a
	var secondNumber = +req.params.b
	var total = firstNumber * secondNumber
	res.end("" + total)
})

server.get("/div/:a/:b", function (req, res){
	var firstNumber = +req.params.a
	var secondNumber = +req.params.b
	var total = firstNumber / secondNumber
	res.end("" + total)
})

server.listen(3000, function(){
	console.log("server listening at port 3000")

})



