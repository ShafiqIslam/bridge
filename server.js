var helper = require('./server/helper.js');

var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

var players = [];
var player_sockets = [];

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/list-players', function (req, res) {
	console.log(players);
	res.end(JSON.stringify(players));
});

require('./server/player.js')(io, players, player_sockets, helper);