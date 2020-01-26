var Persoon = require('./Persoon');
var colors = require('colors');
var _ = require('underscore');

var arr = [];

arr.push(new Persoon('Peter', 'Kassenaar', 'info@kassenaar.com'));
arr.push(new Persoon('Bob', 'van Duuren', 'info@vanduurenmedia.nl'));
arr.push(new Persoon('Michiel', 'de Rond', 'mderond@vanduurenmedia.nl'));

arr = _.sortBy(arr, 'achternaam');

arr.forEach(function (persoon) {
    console.log('Naam: ', persoon.voornaam, persoon.achternaam);
	console.log(persoon.email.blue.underline);
	// OF: console.log(colors.blue.underline(persoon.email));
	console.log('/*-------------------*/')
});

console.log(_.first(arr));
console.log(_.last(arr));