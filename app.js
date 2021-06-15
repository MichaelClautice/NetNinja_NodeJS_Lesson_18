// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 18 - Serving JSON Data
//-----------
// WHAT THIS APP DOES------
// This lesson’s application utilizes a server to 
// respond w JSON data to a client's URL request

// REQUIRE THE CORE MODULE------
// srvr requires th http core mod
const http = require('http');

// CREATE THE SERVER------
// create & assign a srvr
// utilize NodeJS's req & res objs
const server = http.createServer(function (req, res)
{
	// CON.LOG A TEST MSSG-------
	console.log('\nClient made this URL request: ' + req.url);
	// CREATE THE RESPONSE HEADER------
	// res header info also available in dev tools
	res.writeHead(200,
	{
		'Content-type': 'application/json'
	});
	// CREATE THE JSON DATA--------- 
	// via declaring a JSON obj
	const myObj = {
		name: 'Sam',
		job: 'plumber',
		age: 32
	};
	// END THE SERVER'S RESPONSE-------
	// th JSON data must changed from an object into a string literal
	res.end(JSON.stringify(myObj));

});

// LISTEN FOR THE PORT NUMBER------
server.listen(3000, '127.0.0.1');
// CON.LOG A TEST MSSG-------
console.log("\nThis app's server is now listening to port 3000, y'all!\n");