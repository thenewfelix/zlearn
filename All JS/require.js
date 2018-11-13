var http = require("http")

var server = http.createServer();

server.on("request", function (request, response){
	
	if (request.url == "/page"){
	response.write("welcome to the page")
}   else{
	response.write("forbidden")

}
	response.end()
})

server.listen(3000)

