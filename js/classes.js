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
		,size = config.ball.size
		,color = config.ball.color
		,direction = getRandomInt(45, 135)
		,speed = 10
		){

		this.balls.push(new Ball(xOff, yOff, size, color, direction, speed))
	}

	addBalls(
	count = 2
	,yOff = Math.floor(this.height*(8/10))
	,size = config.ball.size
	,color = config.ball.color
	,speed = 10
	){
		var xOff = this.width/(count+1);
		for(var i=1; i<=count; i++){
			var direction = getRandomInt(45, 135);
			this.addBall(Math.floor(xOff*i), yOff, size, color, direction, speed);
		}
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

	showAllBalls(){
		for(var i=0; i<this.balls.length; i++){
			this.showBall(this.balls[i]);
		}
	}

	moveBall(ball, xOffNew, yOffNew){
		this.hideBall(ball);
		ball.xOff = xOffNew;
		ball.yOff = yOffNew;
		this.showBall(ball);
	}

	// Handling blocks
	addBlock(
	xOff
	,yOff
	,width = config.block.width
	,height = config.block.height
	,color = config.block.color
	,borderColor = config.block.borderColor
	,borderWidth = config.block.borderWidth
	){
		this.blocks.push(new Block(xOff,yOff,width,height,color,borderColor,borderWidth));
	}

	addBlockOfBlocks(
	xOff
	,yOff
	,countWidth // count of blocks wide
	,countHeight // count of blocks high
	,width = config.block.width
	,height = config.block.height
	,color = config.block.color
	,borderColor = config.block.borderColor
	,borderWidth = config.block.borderWidth
	){
		for(var r = 0; r < countHeight; r++){
			for(var c = 0; c < countWidth; c++){
				this.addBlock(
					xOff + (width * c)
					,yOff + (height * r)
					,width
					,height
					,color
					,borderColor
					,borderWidth
				);
			}
		}
	}

	showBlock(block){
		// Main block
		board.ctx.fillStyle = block.color;
		board.ctx.fillRect(block.xOff, block.yOff, block.width, block.height);

		// Border
		board.ctx.strokeStyle = block.borderColor;
		board.ctx.lineWidth = block.borderWidth;
		board.ctx.strokeRect(block.xOff, block.yOff, block.width, block.height);
	}

	showAllBlocks(){
		for(var i=0; i<this.blocks.length; i++){
			this.showBlock(this.blocks[i]);
		}
	}


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
	,direction
	,speed
	){
		this.xOff = xOff;
		this.yOff = yOff;
		this.size = size;
		this.color = color;
		this.direction = direction;
		this.speed = speed;
	}
}

class Block {
	constructor(
	xOff
	,yOff
	,width
	,height
	,color
	,borderColor
	,borderWidth
	){

		this.xOff = xOff;
		this.yOff = yOff;
		this.width = width;
		this.height = height;
		this.color = color;
		this.borderColor = borderColor;
		this.borderWidth = borderWidth;
	}
}