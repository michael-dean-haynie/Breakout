function initConfig(){
	var config = new Object();

	// Board
	config.board = new Object();
	var t = config.board;
	t.width = "500";
	t.height = "500";
	t.backgroundColor = "black";

		// Block
		config.board.block = new Object();
		var t = config.board.block;
		t.defaultColor = "red";
		t.defaultHeight = "10";
		t.defaultWidth = "30";
		t.defaultBorderColor = "white";
		t.defaultBorderWidth = "2";

		// Ball
		config.board.ball = new Object();
		var t = config.board.ball;
		t.size = "4";
		t.color = "white";

	return config;
}