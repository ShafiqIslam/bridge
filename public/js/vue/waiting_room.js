var waitingRoomVue = new Vue({
	el: "#waiting_room",

	data: {
		players: [],
		player: {},
		newPlayerName: "",
		playerNameError: false,
	},

	methods: {
		newPlayerJoined: function(e) {
			if(player_name_exist_in_players(this.newPlayerName, this.players)) {
		        this.playerNameError = true;
		        return;
			}

			this.player.name = this.newPlayerName;
			socket.emit('newPlayerJoined', this.player);
		}
	},

	created() {
		this.$http.get('/list-players').then(response => {
			console.log(response.body);
			this.players = response.body;
		}, response => {
			// error callback
		});
	}
});