var http = require("http")

var server = http.createServer()

server.on("request", function(request, response){
	var url = request.url
	var urlArray = url.split("")
	urlArray.shift()
	var name = urlArray.join("")
	console.log(name + " has connected");

})

server.listen(3000)
