var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.write('{voornaam: "Peter", achternaam: "Kassenaar", email:"info@kassenaar.com"}');
    response.end();
});
server.listen(3000);
console.log("Server started on port 3000.");