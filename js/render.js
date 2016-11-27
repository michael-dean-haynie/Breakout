// Block building
function renderBlock(
	xOff
	,yOff
	,width = config.board.block.defaultWidth
	,height = config.board.block.defaultHeight
	,color = config.board.block.defaultColor
	,borderColor = config.board.block.defaultBorderColor
	,borderWidth = config.board.block.defaultBorderWidth
	){

	// Main block
	board.ctx.fillStyle = color;
	board.ctx.fillRect(xOff, yOff, width, height);

	// Border
	board.ctx.strokeStyle = borderColor;
	board.ctx.lineWidth = borderWidth;
	board.ctx.strokeRect(xOff, yOff, width, height);
}

function renderBlocks(
	xOff
	,yOff
	,countWidth // count of blocks wide
	,countHeight // count of blocks high
	,width = config.board.block.defaultWidth
	,height = config.board.block.defaultHeight
	,color = config.board.block.defaultColor
	,borderColor = config.board.block.defaultBorderColor
	,borderWidth = config.board.block.defaultBorderWidth
	){

	for(var r = 0; r < countHeight; r++){
		for(var c = 0; c < countWidth; c++){
			renderBlock(
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


// Ball moving
function showBall(
	xOff
	,yOff
	,color = config.board.ball.color
	,size = config.board.ball.size
	){

	board.ctx.fillStyle = color;
	board.ctx.fillRect(xOff, yOff, size, size);
}

function hideBall(
	xOff
	,yOff
	,color = config.board.backgroundColor
	,size = config.board.ball.size
	){

	board.ctx.fillStyle = color;
	board.ctx.strokeStyle = color;
	board.ctx.fillRect(xOff, yOff, size, size);
	board.ctx.strokeRect(xOff, yOff, size, size);
}

function showMove(
	xOffFrom
	,yOffFrom
	,xOffTo
	,yOffTo
	,colorFrom = config.board.backgroundColor
	,colorTo = config.board.ball.color
	,sizeFrom = config.board.ball.size
	,sizeTo = config.board.ball.size
	){

	hideBall(xOffFrom, yOffFrom, colorFrom, sizeTo);
	showBall(xOffTo, yOffTo, colorTo, sizeTo);
}




















