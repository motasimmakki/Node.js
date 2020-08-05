var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){

	var req=request.url;
	var fileName="";

	if(req=="/"||req=="/index.html"||req=="/about.html/index.html"||req=="/contact.html/index.html"||req=="/portfolio.html/index.html")
		fileName="index.html";
	else if(req=="/style.css")
		fileName="style.css";
	else if(req=="/about.html")
		fileName="about.html";
	else if(req=="/contact.html")
		fileName="contact.html";
	else if(req=="/portfolio.html")
		fileName="portfolio.html";
	else if(req=="/script.js")
		fileName="script.js";

	// console.log("["+__dirname+"/public/"+fileName+"]");

	fs.readFile(__dirname+"/public/"+fileName,function(err,data){
		if(err){
			response.writeHead(404);
			response.end("File Not Found!")
		}
		else{
			response.writeHead(200);
			response.end(data);
		}
	});

}).listen(9001);