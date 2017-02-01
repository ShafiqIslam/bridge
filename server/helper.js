module.exports = {
	playerNameExistInPlayers: function(new_player_name, players) {
	    for (var x in players) {
	        if(new_player_name == players[x].name) {
	            return true;
	        }
	    }
	    return false;
	}
}