function initState(){
	var state = new Array();
	for(var y = 0; y < config.board.height; y++){
		state[y] = new Array();
		for(var x = 0; x < config.board.width; x++)
			state[y][x] = new boardUnit();
	}
	return state;
}