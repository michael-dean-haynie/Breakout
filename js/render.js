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





















