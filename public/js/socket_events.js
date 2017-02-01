socket.on('newPlayerJoined', function(players){
    waitingRoomVue.players = players;
});