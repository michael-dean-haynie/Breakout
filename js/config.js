function initConfig(){
	var config = new Object();

	// Board
	config.board = new Object();
	var t = config.board;
	t.width = "500";
	t.height = "500";
	t.backgroundColor = "black";

	// Block
	config.block = new Object();
	var t = config.block;
	t.color = "red";
	t.height = "10";
	t.width = "30";
	t.borderColor = "white";
	t.borderWidth = "2";

	// Ball
	config.ball = new Object();
	var t = config.ball;
	t.size = "4";
	t.color = "white";

	return config;
}