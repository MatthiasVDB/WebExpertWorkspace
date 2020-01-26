//db.js - logica voor verbinden met MongoDB
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/H13oef',{ useNewUrlParser: true }, function () {
	console.log('mongoose connected');
});
module.exports = db;