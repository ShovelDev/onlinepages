var title = "WorldBuilder"
Rules.set.gameName("WorldBuilder")

var player = new sprite("img/front.png", game.width/2-25, game.height/2-25, 50, 50)
player.create()

var actualBlockView = new sprite("img/hand.png", game.width-150, 0, 130, 100, 0)

var uis = 50
var debug = false

var leftbtn = new object(150, game.height-100, 50, 50, "grey")
var rightbtn = new object(50, game.height-100, 50, 50, "grey")
var upbtn = new object(100, game.height-150, 50, 50, "grey")
var downbtn = new object(100, game.height-50, 50, 50, "grey")
var rbtn = new object(game.width-150, game.height-150, 40, 40, "blue")
var pbtn = new object(game.width-100, game.height-100, 50, 50, "green")
var wbtn = new object(game.width/2-60-uis, 25, 25, 25, "grey")
var mbtn = new object(game.width/2-25-5-uis, 25, 25, 25, "grey")
var tbtn = new object(game.width/2+5-5-uis, 25, 25, 25, "grey")
var dbtn = new object(game.width/2+30-uis, 25, 25, 25, "grey")
var hbtn = new object(game.width/2+60-uis, 25, 25, 25, "grey")
var zbtn = new object(game.width/2+90-uis, 25, 25, 25, "grey")
var sbtn = new object(game.width/2+120-uis, 25, 25, 25, "grey")
var spbtn = new object(game.width-100, game.height-200, 40, 40, "pink")

var speed = 3
var sprites = []
var mobs = []
var mobspeed = 3

var direction = null;

var actualBlock = "hand"
var blockSize = 16*2
var worldColor = "white"
var uiColor = "black"
var blockType = 0

var mobile = false
if (mobilePlayer()) {
	mobile = true
	actualBlock = "block"
}
var chat = false

Rules.graphics.saturate(120)

function Update() {
	Functions.call(Update)

	sprites.forEach((Selfblock)=>{
		Selfblock.create()
		Selfblock.draw()
	})
	mobs.forEach((Selfblock)=>{
		Selfblock.create()
		Selfblock.draw()
		if (Selfblock.x < player.x) {
			Selfblock.x += mobspeed
		}else{
			Selfblock.x -= mobspeed
		}
		if (Selfblock.y < player.y) {
			Selfblock.y += mobspeed
		}else{
			Selfblock.y -= mobspeed
		}
	})

	if (player.x <= 0) {
		player.x = 1
	}
	if (player.x+player.width >= game.width) {
		player.x = game.width-player.width
	}
	if (player.y <= 0) {
		player.y = 1
	}
	if (player.y+player.height >= game.height) {
		player.y = game.height-player.height
	}

	if (!mobile) {
		if (Keyboard.d) {
			player.x += speed
			player.src = "img/right.png"
			player.create()
		}
		if (Keyboard.a) {
			player.x -= speed
			player.src = "img/left.png"
			player.create()
		}
		if (Keyboard.s) {
			player.y += speed
			player.src = "img/front.png"
			player.create()
		}
		if (Keyboard.w) {
			player.y -= speed
			player.src = "img/back.png"
			player.create()
		}
		if (Keyboard.space && !debug) {
			if (speed < 8) {
				speed += 0.05
			}
		}
		if (!Keyboard.space && !debug) {
			if (speed > 5) {
				speed -= 0.05
			}
		}
	}

	if (leftbtn.touch()) {
		player.x += speed
		direction = "left"
		player.src = "img/right.png"
		player.create()
	}
	if (rightbtn.touch()) {
		player.x -= speed
		direction = "right"
		player.src = "img/left.png"
		player.create()
	}
	if (upbtn.touch()) {
		player.y -= speed
		direction = "up"
		player.src = "img/back.png"
		player.create()
	}
	if (downbtn.touch()) {
		player.y += speed
		direction = "down"
		player.src = "img/front.png"
		player.create()
	}
	if (rbtn.touch()) {
		sprites.splice(0,sprites.length)
		mobs.splice(0,mobs.length)
	}
	if (pbtn.touch()) {
		placeBlock()
	}
	if (wbtn.touch()) {
		blockType = 0
		actualBlock = "block"
	}
	if (mbtn.touch()) {
		blockType = 1
		actualBlock = "machime"
	}
	if (tbtn.touch()) {
		blockType = 2
		actualBlock = "tree"
	}
	if (dbtn.touch()) {
		blockType = 3
		actualBlock = "dead"
	}
	if (hbtn.touch()) {
		blockType = 4
		actualBlock = "brick"
	}
	if (zbtn.touch()) {
		blockType = 5
		actualBlock = "zombie"
	}
	if (sbtn.touch()) {
		blockType = 6
		actualBlock = "head"
	}
	if (spbtn.touch()) {
		if (direction == "up") {
			player.y -= 7
		}
		if (direction == "down") {
			player.y += 7
		}
		if (direction == "left") {
			player.x += 7
		}
		if (direction == "right") {
			player.x -= 7
		}
	}

	player.draw()

	if (mobile) {
		mobspeed = 1
		leftbtn.place()
		rightbtn.place()
		upbtn.place()
		downbtn.place()
		rbtn.place()
		pbtn.place()
		wbtn.place()
		mbtn.place()
		tbtn.place()
		dbtn.place()
		hbtn.place()
		zbtn.place()
		sbtn.place()
		spbtn.place()
	}

	if (!mobile) {
		actualBlockView.create()
		actualBlockView.draw()
	}

	Functions.draw.text("FPS:" + fps, 0, 20, 20, uiColor, "monospace")
	Functions.draw.text("Element:" + actualBlock, 0, 40, 20, uiColor, "monospace")

}
Update()
Rules.background(worldColor)

if (!mobile) {
	addEventListener("mousedown", (e)=>{
		if (actualBlock == "block") {
			sprites.push(new sprite("img/wall.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize, blockSize))
		}
		if (actualBlock == "machime") {
			sprites.push(new sprite("img/machime.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize, blockSize))
		}
		if (actualBlock == "tree") {
			sprites.push(new sprite("img/tree.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize*2, blockSize*2))
		}
		if (actualBlock == "deadtree") {
			sprites.push(new sprite("img/dead.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize*2, blockSize*2))
		}
		if (actualBlock == "brick") {
			sprites.push(new sprite("img/brick.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize*2, blockSize*2))
		}
		if (actualBlock == "zombie") {
			mobs.push(new sprite("img/zombie.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize*2, blockSize*2))
		}
		if (actualBlock == "head") {
			sprites.push(new sprite("img/head.png",e.clientX-blockSize/2, e.clientY-blockSize/2, blockSize+25, blockSize+10))
		}
	})
}

function placeBlock(){
	if (blockType == 0) {
		sprites.push(new sprite("img/wall.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize, blockSize))
	}
	if (blockType == 1) {
		sprites.push(new sprite("img/machime.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize, blockSize))
	}
	if (blockType == 2) {
		sprites.push(new sprite("img/tree.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize*2, blockSize*2))
	}
	if (blockType == 3) {
		sprites.push(new sprite("img/dead.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize*2, blockSize*2))
	}
	if (blockType == 4) {
		sprites.push(new sprite("img/brick.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize*2, blockSize*2))
	}
	if (blockType == 5) {
		mobs.push(new sprite("img/zombie.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize*2, blockSize*2))
	}
	if (blockType == 6) {
		sprites.push(new sprite("img/head.png",player.x-blockSize/2+25, player.y-blockSize/2+25, blockSize+25, blockSize+10))
	}
}

addEventListener("keydown", (e)=>{
	if (e.key == "1") {
		actualBlock = "hand"
		actualBlockView.src = "img/hand.png"
	}
	if (e.key == "2") {
		actualBlock = "block"
		actualBlockView.src = "img/wall.png"
	}
	if (e.key == "3") {
		actualBlock = "machime"
		actualBlockView.src = "img/machime.png"
	}
	if (e.key == "4") {
		actualBlock = "tree"
		actualBlockView.src = "img/tree.png"
	}
	if (e.key == "5") {
		actualBlock = "deadtree"
		actualBlockView.src = "img/dead.png"
	}
	if (e.key == "6") {
		actualBlock = "brick"
		actualBlockView.src = "img/brick.png"
	}
	if (e.key == "7") {
		actualBlock = "zombie"
		actualBlockView.src = "img/eggs/zombie.png"
	}
	if (e.key == "8") {
		actualBlock = "head"
		actualBlockView.src = "img/head.png"
	}
	if (e.key == "r") {
		sprites.splice(0,sprites.length)
		mobs.splice(0,mobs.length)
		actualMob = {
			x: -100,
			y: -100,
			width: 0,
			height: 0
		}
	}
	if (e.key == "t") {
		var command = prompt("Commands")
		if (command == "/world") {
			worldColor = prompt("World Color")
			Rules.background(worldColor)
		}
		if (command == "/ui") {
			uiColor = prompt("UI Color")
		}
		if (command == "/title") {
			title = prompt("Title")
			Rules.set.gameName(title)
		}
		if (command == "/light") {
			var light = prompt("World Light")
			Rules.graphics.light(light)
		}
		if (command == "/color") {
			var saturate = prompt("World Color Force")
			Rules.graphics.saturate(saturate)
		}
		if (command == "/controls") {
			alert(`W = up
A = left
S = down
D = right
Click = place block
R = clear map
T = command bar`)
		}
		if (command == "/reset") {
			sprites.splice(0,sprites.length)
			mobs.splice(0,mobs.length)
			worldColor = "white"
			Rules.background(worldColor)
			Rules.graphics.saturate(120)
			Rules.graphics.light(100)
			Rules.set.gameName("WorldBuilder")
			actualMob = {
				x: -100,
				y: -100,
				width: 0,
				height: 0
			}
		}
		if (command == "/help") {
			alert(`/world - Change the world color
/reset - reset the world
/help - show all commands
/title - set the game name
/controls - show all computer controls
/light - set World Light
/color - set world saturation
/ui - set UI color`)
		}
	}
})