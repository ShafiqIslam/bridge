module.exports = function (io, players, player_sockets, helper) {
	io.sockets.on('connection', function(socket) {
		socket.on('newPlayerJoined', function(player) {
			if(helper.playerNameExistInPlayers(player.name, players)) {
				return;
			}

			socket.player_name = player.name;
			players.push(player);
			player_sockets.push(socket);
			io.sockets.emit('newPlayerJoined', players);
		});
		
		socket.on('disconnect', function() {
			if(!socket.player_name) return;

			for (x in players) {
	            if(socket.player_name == players[x].name) {
	                players.splice(x, 1);
					player_sockets.splice(x, 1);
					io.sockets.emit('playerLeft', players);
					return;
	            }
	        }	
	    });
	});
}