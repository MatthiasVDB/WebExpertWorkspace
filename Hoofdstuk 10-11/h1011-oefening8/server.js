// 1. Maak de Express-app
var express = require('express');
var app = express();

// 2. Haal de gegevens binnen de app (in werkelijkheid doen we hier bv een database-call)
var heroes = require('./heroes.json');

// 3. Stel middleware in voor serveren van statische bestanden (HTML, CSS, images)
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));

// 4. Start de server.
app.listen(3000);
console.log('Express app gestart op localhost:3000');

//**************************
// 5. De Routes voor de API.
//**************************

//5a. Retourneer heroes
app.get('/heroes', function(req, res){
	res.json(heroes);
});

//5b. Retourneer specifieke hero, op basis van ID
app.get('/heroes/:id', function(req, res){
	var id = req.params.id;
	var gezochteHero;
	heroes.forEach(function(hero){
		if(hero.id === parseInt(id)){
			gezochteHero = hero;
		}
	});
	// Hero niet gevonden
	if(!gezochteHero){
		gezochteHero = {
			error : 'Hero niet gevonden'
		}
	}
	res.json(gezochteHero);
});

//5c. Post een nieuwe hero
var hero = {};
app.post('/heroes', function (req, res) {
	// TODO: error checking!
	console.log(req.body);
	hero.naam = req.body.naam;
    hero.dps = req.body.dps;
    hero.class = req.body.class;
    hero.avatar = req.body.avatar;

	// Echo het user-object naar de client
	res.json(hero);
});