function main(){
	window.config = initConfig();

	// Initialize board
	window.board = new Board();
	board.addBalls(3);
	board.showAllBalls();

	board.addBlockOfBlocks(5,5,5,5);
	board.showAllBlocks();

	setInterval(tick, 20);

}

function tick(){
	// Handle each ball independently
	for(var bi=0; bi<board.balls.length; bi++){ // bi = ball index
		var b = board.balls[bi];
		var d = b.direction;

		// calculate next unstopable position unit by unit listening for colision
		for(var us=0; us<board.balls[bi].speed; us++){// us = unit step
			
		}
	}
}

