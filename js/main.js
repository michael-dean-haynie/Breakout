function main(){
	window.config = initConfig();

	// Initialize board
	window.board = new Object();
	board.state = initState();

	board.htmlElmt = document.getElementById("board");
	board.htmlElmt.width = config.board.width;
	board.htmlElmt.height = config.board.height;

	board.ctx = board.htmlElmt.getContext("2d");
	board.ctx.fillStyle = config.board.backgroundColor;
	board.ctx.fillRect(0,0,config.board.width,config.board.height)

	// trying out the rendering
	renderBlocks(5, 5, 5, 5);
	showBall(5,100);
	// window.setInterval(temp, 20);/

}

