function player_name_exist_in_players(new_player_name, players) {

    for (var x in players) {
        if(new_player_name == players[x].name) {
            return true;
        }
    }

    return false;
}