var http = require('http');

var person = JSON.parse('{"voornaam":"Peter", "achternaam":"Kassenaar", "email":"info@kassenaar.com"}');
var contact = JSON.parse('{"voornaam":"Jan", "achternaam":"Janssens", "email":"info@janssens.com"}');
var notFound = JSON.parse('{"status":"404", "text":"Pagina niet gevonden..."}');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === '/persoon') {
        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify(person));
        response.end();
    } else if (request.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify(contact));
        response.end();
    } else {
        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify(notFound));
        response.end();
    }
    
});
server.listen(3000);
console.log("Server started on port 3000.");