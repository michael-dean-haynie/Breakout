class Board{
	constructor(
		width = config.board.width
		,height = config.board.height
		,canvasID = "board"
		){

		this.units = new Array();
		this.balls = new Array();
		this.blocks = new Array();
		this.width = width;
		this.height = height;
		this.color = config.board.backgroundColor;
		this.canvasID = canvasID

		// Initializing board units
		for(var y = 0; y < this.height; y++){
			this.units[y] = new Array();
			for(var x = 0; x < this.width; x++)
				this.units[y][x] = new BoardUnit();
		}

		// Initializing canvas and context
		this.canvasElement = document.getElementById(canvasID);
		this.canvasElement.width = this.width;
		this.canvasElement.height = this.height;

		this.ctx = this.canvasElement.getContext("2d");
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(0,0,this.width,this.height);
	}

	// Handling balls
	addBall(
		xOff = Math.floor(this.width/2)
		,yOff = Math.floor(this.height*(8/10))
		,size = config.board.ball.size
		,color = config.board.ball.color
		){

		this.balls.push(new Ball(xOff, yOff, size, color))
	}

	showBall(ball){
		board.ctx.fillStyle = ball.color;
		board.ctx.fillRect(ball.xOff, ball.yOff, ball.size, ball.size);
	}

	hideBall(ball){
		board.ctx.fillStyle = this.color;
		board.ctx.strokeStyle = this.color;
		board.ctx.fillRect(ball.xOff, ball.yOff, ball.size, ball.size);
		board.ctx.strokeRect(ball.xOff, ball.yOff, ball.size, ball.size);
	}

	moveBall(ball, xOffNew, yOffNew){
		this.hideBall(ball);
		ball.xOff = xOffNew;
		ball.yOff = yOffNew;
		this.showBall(ball);
	}

	// Handling blocks
}

class BoardUnit {
	constructor(){
		this.blocksPathing = false;
		this.partOfBlock = false;

	}
}

class Ball {
	constructor(
	xOff
	,yOff
	,size
	,color
	){
		this.xOff = xOff;
		this.yOff = yOff;
		this.size = size;
		this.color = color
	}
}